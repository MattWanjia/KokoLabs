from django.shortcuts import render
from .models import Category, Income, Expense, Goal
from .serializers import CategorySerializer, IncomeSerializer, ExpenseSerializer, GoalSerializer, UserSerializer
from rest_framework import viewsets
from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import api_view
from django.http import JsonResponse
from django.db.models import Sum
from django.db.models.functions import TruncMonth
from django.utils.timezone import now, timedelta



@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)  # Generate JWT tokens
            response_data = {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user_id': user.id
            }
            return Response(response_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CategoryViewset(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    #queryset = Category.objects.all().order_by('-id')
    #pagination_class = DevicePagination
    filter_backends = [DjangoFilterBackend]
    search_fields = ['name']

    def get_queryset(self):
        user = self.request.user
        queryset = Category.objects.filter(user=user).order_by('-id')
        return queryset


class CategoryDetailView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, pk):
        try:
            category = Category.objects.get(pk=pk)
            serializer = CategorySerializer(category)
            return Response(serializer.data)
        except Category.DoesNotExist:
            return Response({"error": "Category does not exist"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class IncomeViewset(viewsets.ModelViewSet):
    serializer_class = IncomeSerializer
    #queryset = Income.objects.all().order_by('-id')
    #pagination_class = DevicePagination
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['time_added']

    def get_queryset(self):
        user = self.request.user
        queryset = Income.objects.filter(user=user).order_by('-id')
        return queryset


class ExpenseViewset(viewsets.ModelViewSet):
    serializer_class = ExpenseSerializer
    #queryset = Expense.objects.all().order_by('-id')
    #pagination_class = DevicePagination
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['time_spent', 'category', 'amount']

    def get_queryset(self):
        user = self.request.user
        queryset = Expense.objects.filter(user=user).order_by('-id')
        return queryset


@api_view(['GET'])
def get_monthly_totals(request):
    user = request.user

    if user.is_authenticated:
        user_id = user.id

        # Get the start date and end date for the last 5 months
        today = now().date()
        start_date = today - timedelta(days=6*30)  # Assuming each month has 30 days
        end_date = today + timedelta(days=1)  # Add 1 day to include today

        # Initialize a dictionary to store monthly totals for expenses and incomes
        monthly_totals = {}

        # Loop through each month in the last 5 months
        current_month = start_date.replace(day=1)
        while current_month <= end_date.replace(day=1):
            # Get the start and end of the current month
            month_start = current_month
            month_end = (current_month + timedelta(days=32)).replace(day=1) - timedelta(days=1)

            # Get monthly totals of expenses for the logged-in user for the current month
            expense_total = Expense.objects.filter(user_id=user_id, time_spent__range=[month_start, month_end]).aggregate(total=Sum('amount'))['total'] or 0

            # Get monthly totals of incomes for the logged-in user for the current month
            income_total = Income.objects.filter(user_id=user_id, time_added__range=[month_start, month_end]).aggregate(total=Sum('amount'))['total'] or 0

            # Add monthly totals to the dictionary
            monthly_totals[current_month.strftime('%B %Y')] = {'total_expense': expense_total, 'total_income': income_total}

            # Move to the next month
            current_month = (current_month + timedelta(days=32)).replace(day=1)

        return Response(monthly_totals)
    else:
        return Response({'error': 'User is not authenticated'}, status=401)

class GoalViewset(viewsets.ModelViewSet):
    serializer_class = GoalSerializer
    #queryset = Goal.objects.all().order_by('-id')

    def get_queryset(self):
        user = self.request.user
        queryset = Goal.objects.filter(user=user).order_by('-id')
        return queryset