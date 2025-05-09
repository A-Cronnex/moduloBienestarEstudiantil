# Generated by Django 5.1.2 on 2024-11-03 03:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Estudiante',
            fields=[
                ('nombreCompleto', models.CharField(max_length=36)),
                ('edad', models.IntegerField()),
                ('cedula', models.CharField(max_length=15, primary_key=True, serialize=False, unique=True)),
                ('telefonoUno', models.CharField(max_length=12)),
                ('telefonoDos', models.CharField(max_length=12)),
                ('correoInstitucional', models.EmailField(max_length=254)),
                ('yearCursado', models.IntegerField()),
                ('proyectoQueParticipa', models.CharField(max_length=100)),
                ('nombreFacultad', models.CharField(max_length=60)),
                ('tipoSangre', models.CharField(max_length=1)),
                ('nombreCarrera', models.CharField(max_length=80)),
                ('booleanoReciboPago', models.BooleanField()),
            ],
        ),
    ]
