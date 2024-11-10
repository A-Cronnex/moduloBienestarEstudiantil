from django import forms
from .models import Estudiante

class EstudianteForm(forms.ModelForm):
    nombreCompleto = forms.CharField(max_length=60)
    edad = forms.IntegerField()
    cedula = forms.CharField(max_length=15)
    telefonoUno = forms.CharField(max_length=12)
    telefonoDos = forms.CharField(max_length=12)
    correoInstitucional = forms.EmailField()
    yearCursado = forms.IntegerField()
    proyectoQueParticipa = forms.CharField(max_length=100)
    nombreFacultad = forms.CharField(max_length=60)
    tipoSangre = forms.CharField(max_length=3)
    nombreCarrera = forms.CharField(max_length=80)
    booleanoReciboPago = forms.BooleanField()
    class Meta:
        model = Estudiante
        fields = Estudiante.returnAttributes().split(' ')