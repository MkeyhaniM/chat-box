import uuid
from django.db import models

class Register_user(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username = models.CharField(max_length=120)
    password = models.CharField(max_length=120)
    email = models.EmailField()

    def __str__(self):
        return self.username

# class Login_user(models.Model):
#     username = models.CharField()
#     password = models.CharField()
#     email = models.EmailField()
#
# class Forget_password(models.Model):
#     username = models.CharField()
#     email = models.EmailField()
#     password = models.CharField()

# Create your models here.
