#backend/urls.py
from django.contrib import admin
from django.urls import path
from .views import RegisterView, OAuth2Token

urlpatterns = [
    path("register/", RegisterView.as_view(), name="register"),
    path("token/", OAuth2Token.as_view(), name="token"),
]