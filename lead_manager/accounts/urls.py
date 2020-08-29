from knox import views as knox_views
from django.urls import path, include

from .api import RegisterAPI

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view())
]
