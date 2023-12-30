"""
URL configuration for Blog_project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
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
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from Blog_app.views import BlogViewSet,PointViewSet,catagory_details,catagory,comments_list

router = DefaultRouter()
router.register(r'blog', BlogViewSet)
router.register(r'points', PointViewSet)


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),  # Corrected include statement
    path("data/<str:slug>",catagory_details ),
    path("datas/<str:Category>/",catagory ),
    path("comments",comments_list),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
