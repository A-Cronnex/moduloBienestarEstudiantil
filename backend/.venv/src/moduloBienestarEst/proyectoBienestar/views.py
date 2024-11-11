from django.shortcuts import render
from .models import Proyecto
from estudiante.views import formViewStudent
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .api.serializers import ProyectoSerializer


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


@api_view(['GET','PUT','DELETE','POST'])
def proyecto_detalle(request, id=None):
    try:
        proyecto = Proyecto.objects.get(pk=id)
    except Proyecto.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ProyectoSerializer(proyecto)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ProyectoSerializer(proyecto, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'POST':
        serializer = ProyectoSerializer(proyecto, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        proyecto.delete()
