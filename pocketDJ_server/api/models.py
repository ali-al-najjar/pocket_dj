from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    class Role(models.TextChoices):
        ADMIN = "Admin", 'admin'
        USER = "User", 'user'
        ARTIST = "Artist", 'Artist'

    role = models.CharField(max_length=255, choices = Role.choices)
    profile = models.ImageField(upload_to='images/profiles/', blank=True)
    isDeleted = models.BooleanField(default=True)

class Mood(models.Model):
    name = models.CharField(max_length=255)
    cover = models.ImageField(upload_to='images/covers/', blank=True)
    isDeleted = models.BooleanField(default=True)

class Song(models.Model):
    name = models.CharField(max_length=255)
    cover = models.ImageField(upload_to='images/covers/', blank=True)
    link = models.FileField(upload_to='audio/',blank=True)
    danceability= models.DecimalField(max_digits=15, decimal_places=10,blank=True)
    duration = models.DecimalField(max_digits=15, decimal_places=10,blank=True)
    energy = models.DecimalField(max_digits=15, decimal_places=10,blank=True)
    instrumentalness = models.DecimalField(max_digits=15, decimal_places=10,blank=True)
    key = models.IntegerField(blank=True)
    liveness = models.DecimalField(max_digits=15, decimal_places=10,blank=True)
    loudness = models.DecimalField(max_digits=15, decimal_places=10,blank=True)
    mode = models.IntegerField(blank=True)
    speechiness = models.DecimalField(max_digits=15, decimal_places=10,blank=True)
    tempo = models.DecimalField(max_digits=15, decimal_places=10,blank=True)
    time_signature = models.IntegerField(blank=True)
    valence = models.DecimalField(max_digits=15, decimal_places=10,blank=True)
    camelot = models.TextField(max_length=255)
    artist = models.ForeignKey(User,on_delete=models.CASCADE,blank=True,null=True)
    mood = models.ForeignKey(Mood,on_delete=models.CASCADE,blank=True,null=True)
    isDeleted = models.BooleanField(default=True)

class Request(models.Model):
    name = models.CharField(max_length=255)
    description=models.CharField(max_length=255)
    is_approved=models.BooleanField()
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    isDeleted = models.BooleanField(default=True)

class Remix(models.Model):
    name = models.CharField(max_length=255)
    link = models.FileField(upload_to='mix/',blank=True)
    date = models.DateTimeField("date published")
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    isDeleted = models.BooleanField(default=True)


class Favorites(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    song = models.ForeignKey(Song,on_delete=models.CASCADE)
    isDeleted = models.BooleanField(default=True)


