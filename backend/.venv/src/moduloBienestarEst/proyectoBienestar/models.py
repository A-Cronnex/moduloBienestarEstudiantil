from django.db import models
from estudiante.models import Estudiante 

# Create your models here.
class Proyecto(models.Model):
    nombreProyecto = models.CharField(max_length=150)
    idProyecto = models.AutoField(primary_key=True)
    fechaCreacion = models.DateField()
    fechaFin = models.DateField()

    def __str__(self) -> str:
        return f"Nombre del Proyecto: {self.nombreProyecto} Id del proyecto {self.idProyecto} Fecha de Creación del Proyecto: {self.fechaCreacion}"
