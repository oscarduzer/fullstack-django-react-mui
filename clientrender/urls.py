from django.urls import path
from .views import *

urlpatterns = [
    path("",view=Index),
    path("name/",view=Index)
]
