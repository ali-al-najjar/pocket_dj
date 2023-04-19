from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    class Role(models.TextChoices):
        ADMIN = "Admin", 'admin'
        USER = "User", 'user'
        ARTIST = "Artist", 'Artist'

    role = models.CharField(max_length=255, choices = Role.choices)
    profile = models.CharField(max_length=255)

    def save(self, *args,**kwargs):
            return super().save(*args, **kwargs)
        
class Song(models.Model):
    name = models.CharField(max_length=255)
    cover = models.CharField(max_length=255)
    song_link = models.CharField(max_length=255)
    scale = models.CharField(max_length=255)
    song_bpm = models.IntegerField()
    language = models.CharField(max_length=255)
    mood = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

class Request(models.Model):
    name = models.CharField(max_length=255)
    description=models.CharField(max_length=255)
    is_approved=models.BooleanField()
    user = models.ForeignKey(User,on_delete=models.CASCADE)

class Remix(models.Model):
    name = models.CharField(max_length=255)
    date = models.DateTimeField("date published")
    user = models.ForeignKey(User,on_delete=models.CASCADE)

class Favorite(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    song = models.ForeignKey(Song,on_delete=models.CASCADE)

