from django.urls import path
from .views import BrochureList, BrochureDetail, BrochureDownload

urlpatterns = [
    path('', BrochureList.as_view(), name='brochure-list'),
    path('<int:pk>/', BrochureDetail.as_view(), name='brochure-detail'),
    path('<int:pk>/download/', BrochureDownload.as_view(), name='brochure-download'),
] 