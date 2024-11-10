from django.shortcuts import render
from .models import Proyecto
from estudiante.views import formViewStudent

def proyectos_view(request, *args, **kwargs):
    nombreProyecto = Proyecto.objects.values_list('nombreProyecto',flat=True)
    fechaProyectoFin = Proyecto.objects.values_list('fechaFin', flat=True)
    context = {'nombreProyecto':nombreProyecto, 'fechaProyectoFin':fechaProyectoFin}
    print(context)
    return render(request,"form.html",context)


def vistaCombinada(request, *args, **kwargs):
    contextProyectos = proyectos_view(request)
    contextEstudiantes = formViewStudent(request)

    context = {**contextEstudiantes,**contextProyectos}
    return render(request, "form.html", context)
