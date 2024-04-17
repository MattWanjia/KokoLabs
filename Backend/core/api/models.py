from django.db import models
from django.contrib.auth.models import User  # Import the User model


class Category(models.Model):
    name = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)  # ForeignKey field to associate categories with users

    def __str__(self):
        return self.name


class Income(models.Model):
    description = models.CharField(max_length=50)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    time_added = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)  # ForeignKey field to associate categories with users

    def __str__(self):
        return self.description


class Expense(models.Model):
    description = models.CharField(max_length=50)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    time_spent = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)  # ForeignKey field to associate categories with users

    def __str__(self):
        return self.description


class Goal(models.Model):
    description = models.CharField(max_length=50)
    amount_expected = models.DecimalField(max_digits=10, decimal_places=2)
    date_due = models.DateField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)  # ForeignKey field to associate categories with users

    def __str__(self):
        return self.description

    def save(self, *args, **kwargs):
        if not self.pk:  # If the instance is being created
            # Check if a goal already exists for this user
            existing_goal = Goal.objects.filter(user=self.user).first()
            if existing_goal:
                # If a goal exists, update its attributes
                existing_goal.description = self.description
                existing_goal.amount_expected = self.amount_expected
                existing_goal.date_due = self.date_due
                existing_goal.save()
                return existing_goal
        return super().save(*args, **kwargs)