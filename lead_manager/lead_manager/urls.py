from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.frontend')),
    path('', include('leads.urls')),
    path('', include('accounts.urls'))
]
