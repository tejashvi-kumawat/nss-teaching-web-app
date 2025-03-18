from django.contrib import admin
from .models import Profile, Announcement, Download, Gallery, Brochure, Report, Contact

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'bio')
    search_fields = ('user__username', 'user__email')

@admin.register(Announcement)
class AnnouncementAdmin(admin.ModelAdmin):
    list_display = ('title', 'date_posted')
    search_fields = ('title', 'content')
    list_filter = ('date_posted',)

@admin.register(Download)
class DownloadAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'uploaded_date')
    search_fields = ('title', 'description')
    list_filter = ('category', 'uploaded_date')

@admin.register(Gallery)
class GalleryAdmin(admin.ModelAdmin):
    list_display = ('title', 'location', 'date', 'type', 'year')
    list_filter = ('type', 'location', 'year')
    search_fields = ('title', 'description', 'location')
    ordering = ('-date',)

@admin.register(Brochure)
class BrochureAdmin(admin.ModelAdmin):
    list_display = ('title', 'year', 'created_at', 'updated_at')
    list_filter = ('year',)
    search_fields = ('title', 'description')
    ordering = ('-year', '-created_at')

@admin.register(Report)
class ReportAdmin(admin.ModelAdmin):
    list_display = ('title', 'location', 'year', 'created_at', 'updated_at')
    list_filter = ('year', 'location')
    search_fields = ('title', 'description', 'location')
    ordering = ('-year', '-created_at')

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('name', 'email', 'subject', 'message')
    ordering = ('-created_at',)
    readonly_fields = ('created_at',)