from rest_framework import routers
from .views import CategoryViewset, GoalViewset, ExpenseViewset, IncomeViewset, register, CategoryDetailView, get_monthly_totals
from django.urls import path,include


router = routers.DefaultRouter()
router.register('category', CategoryViewset, basename='category')
router.register('goal', GoalViewset, basename='goal')
router.register('expense', ExpenseViewset, basename='expense')
router.register('income', IncomeViewset, basename='income')

urlpatterns = [
    path('', include(router.urls)),
    path('register', register, name='register'),
    path('get_category/<int:pk>/', CategoryDetailView.as_view(), name='category-detail'),
    path('get_monthly_totals/', get_monthly_totals, name='get_monthly_totals'),
]
