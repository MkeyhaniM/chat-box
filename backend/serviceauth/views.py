from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Register_user
from .serializers import Register_userSerializer
from rest_framework import status

class RegisterUserCreateAPIView(APIView):
    def get(self, request, *args, **kwargs):
        result = Register_user.objects.all()
        serializers = Register_userSerializer(result, many=True)
        return Response({'status': 'success', "students": serializers.data}, status=200)

    def post(self, request):
        serializer = Register_userSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)