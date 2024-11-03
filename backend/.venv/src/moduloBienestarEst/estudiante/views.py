from django.shortcuts import render
# Create your views here.
def formViewStudent(request, *args, **kwargs):
    return render(request,"form.html",{})