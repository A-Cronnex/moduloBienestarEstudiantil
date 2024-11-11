from rest_framework.serializers import ModelSerializer
from ..models import Estudiante

class EstudianteSerializer(ModelSerializer):
    class Meta:
        model = Estudiante
        fields = tuple(Estudiante.returnAttributes().split(" "))