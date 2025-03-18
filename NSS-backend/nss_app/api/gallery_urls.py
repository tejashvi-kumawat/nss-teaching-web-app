from django.urls import path
from .views import GalleryList, GalleryDetail, GalleryDownload

urlpatterns = [
    path('', GalleryList.as_view(), name='gallery-list'),
    path('<int:pk>/', GalleryDetail.as_view(), name='gallery-detail'),
    path('<int:pk>/download/', GalleryDownload.as_view(), name='gallery-download'),
] 