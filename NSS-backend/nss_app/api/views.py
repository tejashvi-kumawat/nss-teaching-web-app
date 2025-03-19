from rest_framework import viewsets, permissions, status, generics, renderers
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth.models import User
from django.db import IntegrityError
import logging
from .models import Profile, Announcement, Download, Gallery, Brochure, Report, Contact, Event
from .serializers import (
    UserSerializer, UserRegisterSerializer, ProfileSerializer,
    AnnouncementSerializer, DownloadSerializer, GallerySerializer,
    BrochureSerializer, ReportSerializer, ContactSerializer, EventSerializer
)
from django.http import FileResponse, Http404, JsonResponse
from django.views import View
from urllib.parse import quote as urlquote
import os
from django.conf import settings
from rest_framework.decorators import action
from rest_framework.negotiation import BaseContentNegotiation
from django.core.mail import send_mail
from django.template.loader import render_to_string
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from django.views.decorators.csrf import ensure_csrf_cookie
from django.contrib.auth import authenticate, login
from rest_framework.authtoken.models import Token

logger = logging.getLogger(__name__)

class IgnoreClientContentNegotiation(BaseContentNegotiation):
    def select_parser(self, request, parsers):
        return parsers[0]

    def select_renderer(self, request, renderers, format_suffix=None):
        return (renderers[0], renderers[0].media_type)

class UserRegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        try:
            logger.info(f"Received registration data: {request.data}")
            
            # Check if user already exists by username or email
            username = request.data.get('username', '')
            email = request.data.get('email', '')
            
            if User.objects.filter(username=username).exists():
                logger.warning(f"Username {username} already exists")
                return Response({
                    'error': 'Username already exists'
                }, status=status.HTTP_400_BAD_REQUEST)
                
            if User.objects.filter(email=email).exists():
                logger.warning(f"Email {email} already exists")
                return Response({
                    'error': 'Email already exists'
                }, status=status.HTTP_400_BAD_REQUEST)
            
            serializer = self.get_serializer(data=request.data)
            
            if not serializer.is_valid():
                logger.error(f"Validation errors: {serializer.errors}")
                return Response({
                    'error': serializer.errors
                }, status=status.HTTP_400_BAD_REQUEST)
            
            logger.info(f"Serializer validated data: {serializer.validated_data}")
            
            # Create user and profile
            try:
                user = self.perform_create(serializer)
                logger.info(f"User created successfully: {user.username}")
                
                headers = self.get_success_headers(serializer.data)
                return Response({
                    'message': 'Registration successful',
                    'user': serializer.data
                }, status=status.HTTP_201_CREATED, headers=headers)
            except Exception as create_error:
                # If user was created but profile creation failed, cleanup by deleting user
                try:
                    if 'username' in serializer.validated_data and User.objects.filter(username=serializer.validated_data['username']).exists():
                        User.objects.filter(username=serializer.validated_data['username']).delete()
                        logger.info(f"Cleaned up user {serializer.validated_data['username']} after profile creation failed")
                except Exception as cleanup_error:
                    logger.error(f"Error during cleanup: {str(cleanup_error)}")
                
                raise create_error
                
        except IntegrityError as e:
            logger.error(f"Integrity error: {str(e)}")
            if 'unique constraint' in str(e).lower():
                if 'username' in str(e).lower():
                    return Response({
                        'error': 'Username already exists'
                    }, status=status.HTTP_400_BAD_REQUEST)
                elif 'email' in str(e).lower():
                    return Response({
                        'error': 'Email already exists'
                    }, status=status.HTTP_400_BAD_REQUEST)
                elif 'user_id' in str(e).lower():
                    return Response({
                        'error': 'User profile already exists'
                    }, status=status.HTTP_400_BAD_REQUEST)
            return Response({
                'error': f'Registration failed due to database integrity error: {str(e)}'
            }, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            import traceback
            logger.error(f"Unexpected error: {str(e)}")
            logger.error(f"Traceback: {traceback.format_exc()}")
            return Response({
                'error': f'Registration failed: {str(e)}'
            }, status=status.HTTP_400_BAD_REQUEST)
            
    def perform_create(self, serializer):
        return serializer.save()

class UserProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_object(self):
        # Create profile if it doesn't exist
        profile, created = Profile.objects.get_or_create(user=self.request.user)
        return profile

class AnnouncementViewSet(viewsets.ModelViewSet):
    queryset = Announcement.objects.all().order_by('-date_posted')
    serializer_class = AnnouncementSerializer
    
    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            permission_classes = [permissions.AllowAny]
        else:
            permission_classes = [permissions.IsAdminUser]
        return [permission() for permission in permission_classes]

class DownloadViewSet(viewsets.ModelViewSet):
    queryset = Download.objects.all().order_by('-uploaded_date')
    serializer_class = DownloadSerializer
    
    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            permission_classes = [permissions.AllowAny]
        else:
            permission_classes = [permissions.IsAdminUser]
        return [permission() for permission in permission_classes]

class GalleryViewSet(viewsets.ModelViewSet):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        queryset = Gallery.objects.all().order_by('-date')
        location = self.request.query_params.get('location')
        if location:
            queryset = queryset.filter(location=location)
        return queryset
    
    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [permissions.IsAuthenticated()]
        return [permissions.AllowAny()]

class FileDownloadView(View):
    def get(self, request, file_path):
        try:
            # Get the file from the media directory
            file_path = os.path.join(settings.MEDIA_ROOT, file_path)
            if not os.path.exists(file_path):
                raise Http404("File not found")
            
            # Get the filename from the path
            filename = os.path.basename(file_path)
            
            # Open the file and create response
            response = FileResponse(open(file_path, 'rb'))
            response['Content-Disposition'] = f'attachment; filename="{urlquote(filename)}"'
            return response
        except Exception as e:
            raise Http404(str(e))

class BrochureViewSet(viewsets.ModelViewSet):
    queryset = Brochure.objects.all()
    serializer_class = BrochureSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    content_negotiation_class = IgnoreClientContentNegotiation

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [permissions.IsAuthenticated()]
        return [permissions.AllowAny()]

    @action(detail=True, methods=['get'])
    def download(self, request, pk=None):
        brochure = self.get_object()
        if not brochure.file:
            raise Http404("File not found")
        
        try:
            response = FileResponse(brochure.file.open('rb'), content_type='application/pdf')
            response['Content-Disposition'] = f'attachment; filename="{brochure.file.name.split("/")[-1]}"'
            return response
        except Exception as e:
            raise Http404(f"Error serving file: {str(e)}")

class ReportViewSet(viewsets.ModelViewSet):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    content_negotiation_class = IgnoreClientContentNegotiation

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [permissions.IsAuthenticated()]
        return [permissions.AllowAny()]

    @action(detail=True, methods=['get'])
    def download(self, request, pk=None):
        report = self.get_object()
        if not report.file:
            raise Http404("File not found")
        
        try:
            response = FileResponse(report.file.open('rb'), content_type='application/pdf')
            response['Content-Disposition'] = f'attachment; filename="{report.file.name.split("/")[-1]}"'
            return response
        except Exception as e:
            raise Http404(f"Error serving file: {str(e)}")

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [permissions.AllowAny]

    def send_email(self, subject, body, to_email):
        try:
            from_email = settings.EMAIL_HOST_USER
            password = settings.EMAIL_HOST_PASSWORD
            
            message = MIMEMultipart()
            message['From'] = from_email
            message['To'] = to_email
            message['Subject'] = subject
            
            # Create HTML body
            html_body = f"""
            <html>
            <body>
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> {body['name']}</p>
                <p><strong>Email:</strong> {body['email']}</p>
                <p><strong>Subject:</strong> {body['subject']}</p>
                <p><strong>Message:</strong></p>
                <p>{body['message']}</p>
            </body>
            </html>
            """
            
            message.attach(MIMEText(html_body, 'html'))
            
            # Create SMTP session
            server = smtplib.SMTP('smtp.gmail.com', 587)
            server.starttls()
            server.login(from_email, password)
            
            # Send email
            text = message.as_string()
            server.sendmail(from_email, to_email, text)
            server.quit()
            
            return True
        except Exception as e:
            logger.error(f"Error sending email: {str(e)}")
            return False

    def create(self, request, *args, **kwargs):
        try:
            serializer = self.get_serializer(data=request.data)
            if serializer.is_valid():
                # Save the contact form submission
                contact = serializer.save()
                
                # Prepare email content
                subject = f"Received a new Query from {contact.name}"
                body = {
                    'name': contact.name,
                    'email': contact.email,
                    'subject': contact.subject,
                    'message': contact.message
                }
                
                # Send email
                email_sent = self.send_email(
                    subject=subject,
                    body=body,
                    to_email='hvdt.uk@gmail.com'
                )
                
                if not email_sent:
                    logger.warning("Failed to send email, but contact form was saved")
                
                return Response({
                    'message': 'Message sent successfully',
                    'contact': serializer.data
                }, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            logger.error(f"Error processing contact form: {str(e)}")
            return Response({
                'error': 'Failed to process message. Please try again.'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all().order_by('-date')
    serializer_class = EventSerializer
    
    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            permission_classes = [permissions.AllowAny]
        else:
            permission_classes = [permissions.IsAdminUser]
        return [permission() for permission in permission_classes]
        
    def get_queryset(self):
        queryset = Event.objects.all().order_by('-date')
        featured = self.request.query_params.get('featured')
        if featured and featured.lower() == 'true':
            queryset = queryset.filter(is_featured=True)
        return queryset

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def user_info(request):
    user = request.user
    data = {
        'id': user.id,
        'username': user.username,
        'email': user.email,
        'first_name': user.first_name,
        'last_name': user.last_name,
    }
    return Response(data)

@ensure_csrf_cookie
def get_csrf_token(request):
    """
    Endpoint to ensure a CSRF cookie is set for the client.
    This view doesn't actually return any meaningful content, but
    the ensure_csrf_cookie decorator will set the cookie.
    """
    response = JsonResponse({"success": "CSRF cookie set"})
    # Add CORS headers directly to bypass any middleware issues
    response["Access-Control-Allow-Origin"] = "http://localhost:5174"
    response["Access-Control-Allow-Origin"] = "http://localhost:5173"
    response["Access-Control-Allow-Origin"] = "himalayanvidyadaan.org"
    response["Access-Control-Allow-Origin"] = "www.himalayanvidyadaan.org"
    response["Access-Control-Allow-Credentials"] = "true"
    response["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-CSRFToken"
    response["Access-Control-Allow-Methods"] = "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    return response

@api_view(['POST'])
@permission_classes([permissions.AllowAny])
@ensure_csrf_cookie
def login_view(request):
    """
    Login view that accepts username/email and password,
    authenticates the user, and returns a token.
    """
    username = request.data.get('username')
    password = request.data.get('password')
    
    if not username or not password:
        return Response({'error': 'Please provide both username and password'}, status=status.HTTP_400_BAD_REQUEST)
    
    # Try to authenticate using username
    user = authenticate(username=username, password=password)
    
    # If authentication failed, check if username is actually an email
    if user is None:
        # Try to find a user with the given email
        try:
            user_with_email = User.objects.get(email=username)
            # If found, try to authenticate with their username
            user = authenticate(username=user_with_email.username, password=password)
        except User.DoesNotExist:
            # No user found with that email
            pass
    
    if user is not None:
        login(request, user)
        token, created = Token.objects.get_or_create(user=user)
        
        try:
            profile = Profile.objects.get(user=user)
            profile_data = {
                'role': profile.role,
                'entry_number': profile.entry_number,
                'mobile_number': profile.mobile_number,
                'webmail': profile.webmail
            }
        except Profile.DoesNotExist:
            profile_data = {}
        
        response = Response({
            'token': token.key,
            'user_id': user.pk,
            'username': user.username,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'profile': profile_data
        })
        # Add CORS headers directly to bypass any middleware issues
        response["Access-Control-Allow-Origin"] = "http://localhost:5174"
        response["Access-Control-Allow-Origin"] = "http://localhost:5173"
        response["Access-Control-Allow-Credentials"] = "true"
        response["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-CSRFToken"
        response["Access-Control-Allow-Methods"] = "GET, POST, PUT, PATCH, DELETE, OPTIONS"
        return response
    else:
        response = Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        # Add CORS headers to error response too
        response["Access-Control-Allow-Origin"] = "http://localhost:5173"
        response["Access-Control-Allow-Origin"] = "http://localhost:5174"
        response["Access-Control-Allow-Credentials"] = "true"
        response["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-CSRFToken"
        response["Access-Control-Allow-Methods"] = "GET, POST, PUT, PATCH, DELETE, OPTIONS"
        return response

# Class-based views for direct API access
class GalleryList(generics.ListCreateAPIView):
    queryset = Gallery.objects.all().order_by('-date')
    serializer_class = GallerySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        queryset = Gallery.objects.all().order_by('-date')
        location = self.request.query_params.get('location')
        if location:
            queryset = queryset.filter(location=location)
        return queryset

class GalleryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class GalleryDownload(generics.RetrieveAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer
    permission_classes = [permissions.AllowAny]
    
    def retrieve(self, request, *args, **kwargs):
        gallery = self.get_object()
        if not gallery.image:
            raise Http404("Image not found")
        
        try:
            response = FileResponse(gallery.image.open('rb'))
            response['Content-Disposition'] = f'attachment; filename="{gallery.image.name.split("/")[-1]}"'
            return response
        except Exception as e:
            raise Http404(f"Error serving file: {str(e)}")

class BrochureList(generics.ListCreateAPIView):
    queryset = Brochure.objects.all()
    serializer_class = BrochureSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class BrochureDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Brochure.objects.all()
    serializer_class = BrochureSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class BrochureDownload(generics.RetrieveAPIView):
    queryset = Brochure.objects.all()
    serializer_class = BrochureSerializer
    permission_classes = [permissions.AllowAny]
    
    def retrieve(self, request, *args, **kwargs):
        brochure = self.get_object()
        if not brochure.file:
            raise Http404("File not found")
        
        try:
            response = FileResponse(brochure.file.open('rb'), content_type='application/pdf')
            response['Content-Disposition'] = f'attachment; filename="{brochure.file.name.split("/")[-1]}"'
            return response
        except Exception as e:
            raise Http404(f"Error serving file: {str(e)}")

class ReportList(generics.ListCreateAPIView):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class ReportDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class ReportDownload(generics.RetrieveAPIView):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
    permission_classes = [permissions.AllowAny]
    
    def retrieve(self, request, *args, **kwargs):
        report = self.get_object()
        if not report.file:
            raise Http404("File not found")
        
        try:
            response = FileResponse(report.file.open('rb'), content_type='application/pdf')
            response['Content-Disposition'] = f'attachment; filename="{report.file.name.split("/")[-1]}"'
            return response
        except Exception as e:
            raise Http404(f"Error serving file: {str(e)}")

# Simple view for API index
@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def api_index(request):
    return Response({
        "endpoints": {
            "gallery": "/gallery/",
            "brochures": "/brochures/",
            "reports": "/reports/",
            "admin": "/admin/",
        }
    })