from django.db import models

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    profile = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    usertype = models.CharField(max_length=255)


class Song(models.Model):
    name = models.CharField(max_length=255)
    cover = models.CharField(max_length=255)
    song_link = models.CharField(max_length=255)
    scale = models.CharField(max_length=255)
    song_bpm = models.IntegerField(max_length=255)
    language = models.CharField(max_length=255)
    mood = models.CharField(max_length=255)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE,on_update=models.CASCADE)

class Request(models.Model):
    name = models.CharField(max_length=255)
    description=models.CharField(max_length=255)
    is_approved=models.BooleanField()
    user_id = models.ForeignKey(User,on_delete=models.CASCADE,on_update=models.CASCADE)

class Remix(models.Model):
    name = models.CharField(max_length=255)
    date = models.DateTimeField("date published")
    user_id = models.ForeignKey(User,on_delete=models.CASCADE,on_update=models.CASCADE)

class Favorite(models.Model):
    user_id = models.ForeignKey(User,on_delete=models.CASCADE,on_update=models.CASCADE)
    song_id = models.ForeignKey(Song,on_delete=models.CASCADE,on_update=models.CASCADE)

