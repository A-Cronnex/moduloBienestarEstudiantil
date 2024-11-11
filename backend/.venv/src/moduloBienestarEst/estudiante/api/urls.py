from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import EstudianteViewSet

estudiante_router = DefaultRouter()
estudiante_router.register(r'estudiante',EstudianteViewSet)