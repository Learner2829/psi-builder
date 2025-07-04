"""
URL configuration for psi_builder project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from admin_dashbord import views
from django.urls import path, include
from . import view as psi_views


urlpatterns = [
    path('admin_dashbord',include('admin_dashbord.urls')),
    path('admin/', admin.site.urls),
    path('', psi_views.home, name='home'),
    path('about/', psi_views.about, name='about'),
    path('contact/', psi_views.contact, name='contact'),
    path('profile/', psi_views.profile, name='profile'),
]
