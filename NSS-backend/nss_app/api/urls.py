from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    UserRegisterView, UserProfileView, AnnouncementViewSet,
    DownloadViewSet, GalleryViewSet, BrochureViewSet, ReportViewSet,
    ContactViewSet, EventViewSet, user_info, get_csrf_token, login_view
)

router = DefaultRouter()
router.register(r'announcements', AnnouncementViewSet)
router.register(r'downloads', DownloadViewSet)
router.register(r'gallery', GalleryViewSet, basename='gallery')
router.register(r'brochures', BrochureViewSet)
router.register(r'reports', ReportViewSet)
router.register(r'contact', ContactViewSet, basename='contact')
router.register(r'events', EventViewSet, basename='events')

urlpatterns = [
    path('', include(router.urls)),
    path('register/', UserRegisterView.as_view(), name='register'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('user/', user_info, name='user-info'),
    path('csrf/', get_csrf_token, name='csrf-token'),
    path('login/', login_view, name='login'),
]