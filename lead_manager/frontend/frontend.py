from django.apps import AppConfig
from django.shortcuts import render
from django.urls import path


class FrontendConfig(AppConfig):
    name = 'frontend'


def index(request):
    return render(request, 'frontend/index.html')


urlpatterns = [
    path('', index)
]
