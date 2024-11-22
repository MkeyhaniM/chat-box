from django.contrib import admin
from django.urls import include, path
from .views import Register_User,Login_User,Forget_Password

urlpatterns = [
    path("register/", Register_User.as_view()),
    path("login/", Login_User.as_view()),
    path("forget-password/", Forget_Password.as_view()),
]