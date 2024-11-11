from rest_framework.serializers import ModelSerializer
from ..models import Proyecto

class ProyectoSerializer(ModelSerializer):
    class Meta:
        model = Proyecto
        fields = ('nombreProyecto','idProyecto','fechaCreacion','fechaFin')