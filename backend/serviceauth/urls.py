from django.contrib import admin
from django.urls import include, path
from .views import RegisterUserCreateAPIView

urlpatterns = [
    path("register/", RegisterUserCreateAPIView.as_view()),
]