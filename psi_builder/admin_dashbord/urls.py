from django.urls import path
from . import views
from django.urls import path

urlpatterns = [
    path('', views.admin_dashboard, name='admin_dashboard'),
    path('add-stock/', views.add_stock, name='add_stock'),
]