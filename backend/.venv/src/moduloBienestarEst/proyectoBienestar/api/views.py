from rest_framework.viewsets import ModelViewSet
from ..models import Proyecto
from .serializers import ProyectoSerializer

class ProyectoViewSet(ModelViewSet):
    queryset = Proyecto.objects.all()
    serializer_class = ProyectoSerializer