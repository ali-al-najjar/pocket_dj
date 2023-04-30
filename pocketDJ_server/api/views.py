from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer,RegisterSerializer,SongSerializer,MoodSerializer,RemixSerializer,RequestSerializer
from .models import User
from .models import Song
from .models import Remix
from .models import Request
from .models import Mood
from rest_framework.authentication import TokenAuthentication
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework import permissions

class IsAdmin(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.is_authenticated:
            return request.user.role == "Admin"
        return False

class IsArtist(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.is_authenticated:
            return request.user.role == "Artist"
        return False

class UserDetails(APIView):
  authentication_classes = (TokenAuthentication,)
  permission_classes = (AllowAny,)
  def get(self,request,*args,**kwargs):
    user = User.objects.get(id=request.user.id)
    serializer = UserSerializer(user)
    return Response(serializer.data)

class RegisterUser(generics.CreateAPIView):
  permission_classes = (AllowAny,)
  serializer_class = RegisterSerializer


class CreateSong(generics.CreateAPIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAdmin,IsArtist)
    queryset = Song.objects.all()
    serializer_class = SongSerializer

class CreateMood(generics.CreateAPIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAdmin,)
    queryset = Mood.objects.all()
    serializer_class = MoodSerializer

class CreateRemix(generics.CreateAPIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (AllowAny,)
    queryset = Remix.objects.all()
    serializer_class = RemixSerializer


class CreateRequest(generics.CreateAPIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (AllowAny,)
    queryset = Request.objects.all()
    serializer_class = RequestSerializer


class GetUsers(generics.ListAPIView):
    queryset = User.objects.filter(role='User')
    serializer_class = UserSerializer

class GetArtists(generics.ListAPIView):
    queryset = User.objects.filter(role='Artist')
    serializer_class = UserSerializer