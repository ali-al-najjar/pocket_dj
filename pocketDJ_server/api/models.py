from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    class Role(models.TextChoices):
        ADMIN = "Admin", 'admin'
        USER = "User", 'user'
        ARTIST = "Artist", 'Artist'

    role = models.CharField(max_length=255, choices = Role.choices)
    profile = models.ImageField(upload_to='images/profiles/', blank=True)

class Song(models.Model):
    name = models.CharField(max_length=255)
    cover = models.ImageField(upload_to='images/covers/', blank=True)
    song_link = models.CharField(max_length=255)
    scale = models.CharField(max_length=255)
    song_bpm = models.IntegerField()
    language = models.CharField(max_length=255)
    mood = models.CharField(max_length=255)
    users_favorite = models.ManyToManyField(User, related_name='favorite_songs')

class Request(models.Model):
    name = models.CharField(max_length=255)
    description=models.CharField(max_length=255)
    is_approved=models.BooleanField()
    user = models.ForeignKey(User,on_delete=models.CASCADE)

class Remix(models.Model):
    name = models.CharField(max_length=255)
    date = models.DateTimeField("date published")
    user = models.ForeignKey(User,on_delete=models.CASCADE)
