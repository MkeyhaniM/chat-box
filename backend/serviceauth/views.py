from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Register_user
from .serializers import Register_userSerializer
from rest_framework import status
from django.contrib.auth import authenticate


class RegisterUserCreateAPIView(APIView):
    def get(self, request, *args, **kwargs):
        credential = request.data.get('credential')
        password = request.data.get('password')

        if not credential or not password:
            return Response({'error': 'Both credential and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = Register_user.objects.filter(email=credential).first()
                   #  or \
                   # Register_user.objects.filter(username=credential).first()
            if not user:
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        except Register_user.DoesNotExist:
             return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

        print(user, " user >>>>>>>>>>>>.")

        authenticated_user = authenticate(username=user, password=password)

        if authenticated_user:
            return Response({'message': 'Login successful', 'user': authenticated_user.username},
                            status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        # result = Register_user.objects.all()
        # serializers = Register_userSerializer(result, many=True)
        # return Response({'status': 'success', "users": serializers.data}, status=200)


def post(self, request):
    serializer = Register_userSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
    else:
        return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


def put(self, request):
    try:
        print(request.data.get('id'))
        snippet = Register_user.objects.get(pk=request.data.get('id'))
    except Register_user.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = Register_userSerializer(snippet, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
