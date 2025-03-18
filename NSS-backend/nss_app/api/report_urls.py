from django.urls import path
from .views import ReportList, ReportDetail, ReportDownload

urlpatterns = [
    path('', ReportList.as_view(), name='report-list'),
    path('<int:pk>/', ReportDetail.as_view(), name='report-detail'),
    path('<int:pk>/download/', ReportDownload.as_view(), name='report-download'),
] 