from django.shortcuts import render,redirect
from .forms import EstudianteForm
from proyectoBienestar.models import Proyecto
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