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
    link = models.FileField(upload_to='audio/',blank=True)
    scale = models.CharField(max_length=255)
    bpm = models.IntegerField()
    language = models.CharField(max_length=255)
    users_favorite = models.ManyToManyField(User, related_name='favorite_songs',blank=True)
    artist = models.ForeignKey(User,on_delete=models.CASCADE,blank=True)

class Request(models.Model):
    name = models.CharField(max_length=255)
    description=models.CharField(max_length=255)
    is_approved=models.BooleanField()
    user = models.ForeignKey(User,on_delete=models.CASCADE)

class Remix(models.Model):
    name = models.CharField(max_length=255)
    date = models.DateTimeField("date published")
    user = models.ForeignKey(User,on_delete=models.CASCADE)

class Mood(models.Model):
    name = models.CharField(max_length=255)
    cover = models.ImageField(upload_to='images/covers/', blank=True)
    songs = models.ManyToManyField(Song, related_name='moods')
