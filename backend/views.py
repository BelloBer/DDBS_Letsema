#backend/views.py

from django.contrib.auth.models import User
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from oauth2_provider.models import Application
from oauth2_provider.views import TokenView as OAuth2TokenView

# User Registration API
class RegisterView(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        if User.objects.filter(username=username).exists():
            return Response({"error": "Username already exists"}, status=400)
        user = User.objects.create_user(username=username, password=password)
        return Response({"message": "User registered successfully"}, status=201)


# OAuth2 Token View (Handles /api/token/)
class OAuth2Token(OAuth2TokenView):
    permission_classes = [permissions.AllowAny]

