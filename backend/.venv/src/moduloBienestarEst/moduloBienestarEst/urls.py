"""
URL configuration for moduloBienestarEst project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from estudiante.views import formViewStudent
from proyectoBienestar.views import proyectos_view
from estudiante.views import estudiante_detalle
from proyectoBienestar.views import proyecto_detalle
urlpatterns = [
    path('',formViewStudent, name = "form"),
    path('admin/', admin.site.urls),
    path('api/',include('moduloBienestarEst.api.urls')),
    path('estudiante/<int:id>',estudiante_detalle, name="estudiante"),
    path('proyecto/<int:id>',proyecto_detalle,name="proyecto")
]
