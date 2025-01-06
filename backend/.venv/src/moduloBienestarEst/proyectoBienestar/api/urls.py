from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import ProyectoViewSet

proyecto_router = DefaultRouter()
proyecto_router.register(r'proyecto',ProyectoViewSet)