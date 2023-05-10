from rest_framework import serializers
from .models import User
from .models import Song
from .models import Request
from .models import Remix
from .models import Mood
from rest_framework.response import Response
from rest_framework import status
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from django.core.validators import FileExtensionValidator
from django.contrib.auth.validators import UnicodeUsernameValidator
import base64
from django.core.files.base import ContentFile
from django.core.files.uploadedfile import SimpleUploadedFile
from rest_framework.serializers import SerializerMethodField

class UserSerializer(serializers.ModelSerializer):
  songs = serializers.SerializerMethodField()
  class Meta:
    model = User
    fields = ["id","username", "first_name", "last_name", "email","profile","songs"]

  def get_songs(self, obj):
    request = self.context.get('request')
    songs = Song.objects.filter(artist=obj)
    return SongSerializer(songs, many=True,context={'request': request}).data 

class RegisterSerializer(serializers.ModelSerializer):
  username = serializers.CharField(
        required=True,
        validators=[
            UnicodeUsernameValidator(),
            UniqueValidator(queryset=User.objects.all())
        ]
    )
  email = serializers.EmailField(
    required=True,
    validators=[UniqueValidator(queryset=User.objects.all())]
  )
  password = serializers.CharField(
    write_only=True, required=True, validators=[validate_password])
  password2 = serializers.CharField(write_only=True, required=True)
  class Meta:
    model = User
    fields = ('username', 'password', 'password2',
         'email', 'first_name', 'last_name','role','profile')
    extra_kwargs = {
      'first_name': {'required': True},
      'last_name': {'required': True}
    }
  def validate(self, attrs):
    if attrs['password'] != attrs['password2']:
      raise serializers.ValidationError(
        {"password": "Password fields didn't match."})
    return attrs
  def create(self, validated_data):
    user = User.objects.create(
      username=validated_data['username'],
      email=validated_data['email'],
      first_name=validated_data['first_name'],
      last_name=validated_data['last_name'],
      role=validated_data['role'],
      profile = validated_data['profile']
    )
    user.set_password(validated_data['password'])
    user.save()
    return user
  
class SongSerializer(serializers.ModelSerializer):
    artist_name = serializers.CharField(source='artist.first_name', read_only=True)
    artist_last_name = serializers.CharField(source='artist.last_name', read_only=True)
    mood_name = serializers.CharField(source='mood.name', read_only=True)
    
    class Meta:
        model = Song
        fields = ('id','name', 'cover','link', 'danceability','duration','camelot','energy','instrumentalness','key','liveness','loudness','mode','speechiness','time_signature','valence', 'tempo','artist','artist_name','artist_last_name','mood','mood_name')
        extra_kwargs = {
                    'link': {'validators': [FileExtensionValidator(allowed_extensions=['mp3', 'wav'])]},
                }
        

class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = '__all__' 

class MoodSerializer(serializers.ModelSerializer):
   class Meta:
      model = Mood
      fields = '__all__'

class RemixSerializer(serializers.ModelSerializer):
   mood_name = serializers.CharField(source='mood.name', read_only=True)
   cover = serializers.CharField(source='mood.cover',read_only=True,)
   class Meta:
      model = Remix
      fields = ('name', 'date', 'isDeleted','link', 'mood_id', 'mood_name','cover','duration')