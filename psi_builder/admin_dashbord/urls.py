from django.urls import path
from admin_dashbord import views
urlpatterns = [
path("",views.index,name='admin_dashbord')
]
