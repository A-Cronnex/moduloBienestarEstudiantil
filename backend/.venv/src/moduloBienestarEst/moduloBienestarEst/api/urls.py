from rest_framework.routers import DefaultRouter
from estudiante.api.urls import estudiante_router
from proyectoBienestar.api.urls import proyecto_router
from django.urls import path, include

router = DefaultRouter()

router.registry.extend(estudiante_router.registry)
router.registry.extend(proyecto_router.registry)

urlpatterns = [
    path('',include(router.urls))
]