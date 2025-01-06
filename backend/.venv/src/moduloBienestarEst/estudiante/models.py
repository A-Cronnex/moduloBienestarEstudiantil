from django.db import models

# Create your models here.
class Estudiante(models.Model):
    nombreCompleto = models.CharField(max_length=60, null=False)
    edad = models.IntegerField(null=False)
    cedula = models.CharField(max_length=15,unique=True,null=False, primary_key=True)
    telefonoUno = models.CharField(max_length=12)
    telefonoDos = models.CharField(max_length=12)
    correoInstitucional = models.EmailField()
    yearCursado = models.IntegerField()
    proyectoQueParticipa = models.CharField(max_length=100,null=False)
    nombreFacultad = models.CharField(max_length=60)
    tipoSangre = models.CharField(max_length=3)
    nombreCarrera = models.CharField(max_length=80)
    booleanoReciboPago = models.BooleanField()

    def __str__(self):
        return f"{self.nombreCompleto} {self.cedula}"
    
    @staticmethod
    def returnAttributes():
        return "nombreCompleto edad cedula telefonoUno telefonoDos correoInstitucional yearCursado proyectoQueParticipa nombreFacultad tipoSangre nombreCarrera booleanoReciboPago"

    


