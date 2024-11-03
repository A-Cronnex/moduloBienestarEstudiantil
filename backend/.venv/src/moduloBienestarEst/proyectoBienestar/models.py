from django.db import models
from estudiante.models import Estudiante 

# Create your models here.
class Proyecto(models.Model):
    nombreProyecto = models.CharField(max_length=150)
    idProyecto = models.AutoField(primary_key=True)
    fechaCreacion = models.DateField()
    fechaFin = models.DateField()
    estudiantes = models.ManyToManyField(Estudiante)
