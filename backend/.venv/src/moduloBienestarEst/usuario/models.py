from django.db import models

# Create your models here.
class Usuario(models.Model):
    nombreUsuario = models.CharField(max_length=30)
    password = models.CharField(max_length=15)

