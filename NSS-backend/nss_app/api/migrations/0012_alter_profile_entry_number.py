# Generated by Django 5.1.7 on 2025-03-17 23:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_alter_contact_options_alter_profile_entry_number_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='entry_number',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
