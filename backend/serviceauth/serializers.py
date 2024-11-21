from .models import Register_user
from rest_framework import serializers


class Register_userSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=200, required=True)
    password = serializers.CharField(max_length=200, required=True)
    email = serializers.CharField(max_length=200, required=True)

    class Meta:
        model = Register_user
        fields = '__all__'

    def create(self, validated_data):
        return Register_user.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.password = validated_data.get('password', instance.password)
        instance.email = validated_data.get('email', instance.email)

        instance.save()
        return instance
