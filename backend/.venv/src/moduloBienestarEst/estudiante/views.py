from django.shortcuts import render,redirect
from .forms import EstudianteForm
from proyectoBienestar.models import Proyecto
from .models import Estudiante
from rest_framework import status
from rest_framework.response import Response
from .api.serializers import EstudianteSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated





# Create your views here.
def formViewStudent(request, *args, **kwargs):
    nombreProyecto = Proyecto.objects.values_list('nombreProyecto',flat=True)
    fechaProyectoFin = Proyecto.objects.values_list('fechaFin', flat=True)
    context = {'nombreProyecto':nombreProyecto, 'fechaProyectoFin':fechaProyectoFin}

    form = EstudianteForm(request.POST)
    if request.method == "POST":
        if form.is_valid():
            form.save()
            return redirect("form")
    else:
        form = EstudianteForm()
    print(request.POST)
    return render(request,"form.html",{'form':form, **context})

@api_view(['GET','PUT','DELETE'])
@permission_classes([IsAuthenticated])
def estudiante_detalle(request, id):
    try:
        estudiante = Estudiante.objects.get(pk=id)
    except Estudiante.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = EstudianteSerializer(estudiante)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = EstudianteSerializer(estudiante, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        estudiante.delete()
        

