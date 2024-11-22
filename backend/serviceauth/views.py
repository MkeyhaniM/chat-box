from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Register_user
from .serializers import Register_userSerializer
from rest_framework import status
from django.contrib.auth import authenticate


class Register_User(APIView):
    def post(self, request):
        serializer = Register_userSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class Login_User(APIView):
    def get(self, request, *args, **kwargs):
        credential = request.data.get('credential')
        password = request.data.get('password')

        if not credential or not password:
            return Response({'error': 'Both credential and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

        user = Register_user.objects.filter(username=credential, password=password).exists()

        if user:
            return Response({'success': True, 'token': 'token'}, status=status.HTTP_200_OK)
        if not user:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class Forget_Password(APIView):
    def put(self, request):
        try:
            snippet = Register_user.objects.get(username=request.data.get('username'))
        except Register_user.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = Register_userSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)