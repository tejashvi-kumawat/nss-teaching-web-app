from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from .models import Profile, Announcement, Download, Gallery, Brochure, Report, Contact, Event

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']
        read_only_fields = ['id']

class ProfileSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)
    email = serializers.EmailField(source='user.email', read_only=True)
    name = serializers.CharField(source='user.get_full_name', read_only=True)
    
    class Meta:
        model = Profile
        fields = ['id', 'username', 'email', 'name', 'bio', 'entry_number', 'mobile_number', 'webmail', 'role', 'created_at', 'updated_at']
        read_only_fields = ['id', 'username', 'email', 'name', 'created_at', 'updated_at']

class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})
    password2 = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'}, label='Confirm Password')
    email = serializers.EmailField(required=True)
    entry_number = serializers.CharField(required=False, allow_blank=True, allow_null=True, max_length=20)
    mobile_number = serializers.CharField(required=False, allow_blank=True, allow_null=True, max_length=15)
    webmail = serializers.EmailField(required=False, allow_blank=True, allow_null=True)
    role = serializers.ChoiceField(choices=Profile.ROLE_CHOICES, default='Slot Coordinator')
    
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'password2', 'first_name', 'last_name', 'entry_number', 'mobile_number', 'webmail', 'role']
    
    def validate(self, data):
        if data['password'] != data.pop('password2'):
            raise serializers.ValidationError({"password2": "Password fields didn't match."})
        
        # Make sure the webmail field is properly set
        if 'webmail' not in data or not data['webmail']:
            # If webmail not provided but email is, use email as webmail
            data['webmail'] = data.get('email', '')
        
        return data
    
    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("This email is already in use.")
        return value
    
    def validate_username(self, value):
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("This username is already in use.")
        return value
    
    def create(self, validated_data):
        # Extract profile data
        entry_number = validated_data.pop('entry_number', '')
        mobile_number = validated_data.pop('mobile_number', '')
        webmail = validated_data.pop('webmail', '')
        role = validated_data.pop('role', 'Slot Coordinator')  # Default role if not provided
        
        # Convert None values to empty strings
        if entry_number is None:
            entry_number = ''
        if mobile_number is None:
            mobile_number = ''
        if webmail is None:
            webmail = validated_data.get('email', '')  # Fallback to email if webmail is None
        
        # Create user
        validated_data['password'] = make_password(validated_data['password'])
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', '')
        )
        
        # Create or update profile
        profile, created = Profile.objects.get_or_create(
            user=user,
            defaults={
                'entry_number': entry_number,
                'mobile_number': mobile_number,
                'webmail': webmail,
                'role': role
            }
        )
        
        # If the profile already existed, update its fields
        if not created:
            profile.entry_number = entry_number
            profile.mobile_number = mobile_number
            profile.webmail = webmail
            profile.role = role
            profile.save()
        
        return user

class AnnouncementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcement
        fields = ['id', 'title', 'content', 'date_posted', 'image']

class DownloadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Download
        fields = ['id', 'title', 'file', 'description', 'category', 'uploaded_date']

class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = ['id', 'title', 'location', 'image', 'description', 'date', 'type', 'year']

class BrochureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brochure
        fields = ['id', 'title', 'file', 'year', 'description', 'created_at', 'updated_at']

class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = ['id', 'title', 'file', 'year', 'location', 'description', 'created_at', 'updated_at']

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'name', 'email', 'subject', 'message', 'created_at']

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'title', 'date', 'description', 'location', 'image', 'is_featured', 'created_at', 'updated_at']