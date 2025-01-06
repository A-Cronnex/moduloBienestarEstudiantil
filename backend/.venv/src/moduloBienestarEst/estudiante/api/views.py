from rest_framework.viewsets import ModelViewSet
from ..models import Estudiante
from .serializers import EstudianteSerializer

class EstudianteViewSet(ModelViewSet):
    queryset = Estudiante.objects.all()
    serializer_class = EstudianteSerializer