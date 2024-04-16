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

        # Get monthly totals of expenses for the logged-in user
        expense_totals = Expense.objects.filter(user_id=user_id).annotate(month=TruncMonth('time_spent')).values(
            'month').annotate(total=Sum('amount'))

        # Get monthly totals of incomes for the logged-in user
        income_totals = Income.objects.filter(user_id=user_id).annotate(month=TruncMonth('time_added')).values(
            'month').annotate(total=Sum('amount'))

        # Combine expense and income totals into a single list
        monthly_totals = []
        for expense in expense_totals:
            monthly_totals.append({'month': expense['month'], 'total_expense': expense['total'], 'total_income': 0})

        for income in income_totals:
            # Check if there's already a monthly total for this month, if yes, update the income total
            found = False
            for mt in monthly_totals:
                if mt['month'] == income['month']:
                    mt['total_income'] = income['total']
                    found = True
                    break
            # If not found, add a new entry for this month
            if not found:
                monthly_totals.append({'month': income['month'], 'total_expense': 0, 'total_income': income['total']})

        # Sort the monthly totals by month
        monthly_totals.sort(key=lambda x: x['month'])

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