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
from rest_framework import generics , status
from rest_framework.permissions import IsAuthenticated,DjangoModelPermissionsOrAnonReadOnly
from rest_framework import permissions
from django.db.models import Q

class IsAdmin(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.is_authenticated:
            return request.user.role == "Admin"
        return False

class IsAdminOrArtist(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.is_authenticated:
            return request.user.role == "Admin" or request.user.role == "Artist"
        return False

class IsArtist(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.is_authenticated:
            return request.user.role == "Artist"
        return False
    
class GetUsers(generics.ListAPIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAdmin,)
    queryset = User.objects.filter(role='User',isDeleted=True)
    serializer_class = UserSerializer

class UpdateUserProfile(generics.UpdateAPIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    serializer_class = UserSerializer

    def update(self, request, *args, **kwargs):
        user = self.request.user
        
        if request.data.get('first_name'):
            user.first_name = request.data['first_name']
        if request.data.get('last_name'):
            user.last_name = request.data['last_name']
        if request.data.get('profile'):
            user.profile = request.data['profile']
        if request.data.get('username'):
            user.username = request.data['username']
        
        user.save()

        serializer = self.get_serializer(user)

        return Response(serializer.data, status=status.HTTP_200_OK)

class DeleteUser(generics.UpdateAPIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAdmin,)
    serializer_class = UserSerializer

    def update(self, request, *args, **kwargs):
        try:
            user = User.objects.get(pk=kwargs['pk'])
        except User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        user.isDeleted = False
        user.save()

        serializer = self.get_serializer(user)

        return Response(serializer.data, status=status.HTTP_200_OK)
    
class GetArtists(generics.ListAPIView):
    queryset = User.objects.filter(role='Artist',isDeleted=True)
    serializer_class = UserSerializer

class UserDetails(APIView):
  authentication_classes = (TokenAuthentication,)
  permission_classes = (AllowAny,)
  def get(self,request,*args,**kwargs):
    user = User.objects.get(id=request.user.id)
    serializer = UserSerializer(user,context={'request': request})
    return Response(serializer.data)

class RegisterUser(generics.CreateAPIView):
  permission_classes = (AllowAny,)
  serializer_class = RegisterSerializer
  queryset = User.objects.all()


class CreateSong(generics.CreateAPIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAdminOrArtist,)
    queryset = Song.objects.all()
    serializer_class = SongSerializer

class GetSongs(generics.ListAPIView):
    queryset = Song.objects.filter(isDeleted=True)
    serializer_class = SongSerializer
    
class DeleteSong(generics.UpdateAPIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAdmin,)
    serializer_class = SongSerializer

    def update(self, request, *args, **kwargs):
        try:
            song = Song.objects.get(pk=kwargs['pk'])
        except Song.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        song.isDeleted = False
        song.save()

        serializer = self.get_serializer(song)

        return Response(serializer.data, status=status.HTTP_200_OK)


class CreateMood(generics.CreateAPIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAdmin,)
    queryset = Mood.objects.all()
    serializer_class = MoodSerializer

class GetMoods(generics.ListAPIView):
    queryset = Mood.objects.filter(isDeleted=True)
    serializer_class = MoodSerializer

class DeleteMood(generics.UpdateAPIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAdmin,)
    serializer_class = MoodSerializer

    def update(self, request, *args, **kwargs):
        try:
            mood = Mood.objects.get(pk=kwargs['pk'])
        except Mood.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        mood.isDeleted = False
        mood.save()

        serializer = self.get_serializer(mood)

        return Response(serializer.data, status=status.HTTP_200_OK)

class CreateRemix(generics.CreateAPIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (AllowAny,)
    queryset = Remix.objects.all()
    serializer_class = RemixSerializer

class GetRemixes(generics.ListAPIView):
    queryset = Remix.objects.filter(isDeleted=True)
    serializer_class = RemixSerializer

class DeleteRemix(generics.UpdateAPIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAdmin,)
    serializer_class = RemixSerializer

    def update(self, request, *args, **kwargs):
        try:
            remix = Remix.objects.get(pk=kwargs['pk'])
        except Remix.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        remix.isDeleted = False
        remix.save()

        serializer = self.get_serializer(remix)

        return Response(serializer.data, status=status.HTTP_200_OK)


class CreateRequest(generics.CreateAPIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (AllowAny,)
    queryset = Request.objects.all()
    serializer_class = RequestSerializer

class GetRequests(generics.ListAPIView):
    queryset = Request.objects.filter(isDeleted=True)
    serializer_class = RequestSerializer

class DeleteRequest(generics.UpdateAPIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAdmin,)
    serializer_class = RequestSerializer

    def update(self, request, *args, **kwargs):
        try:
            request = Request.objects.get(pk=kwargs['pk'])
        except Request.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        request.isDeleted = False
        request.save()

        serializer = self.get_serializer(request)

        return Response(serializer.data, status=status.HTTP_200_OK)


class SearchView(APIView):
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    
    def get_queryset(self):
        return User.objects.none()
    
    def get(self, request, format=None):
        query = request.GET.get('q')
        if not query:
            return Response({'songs': [],'artists': []})

        songs = Song.objects.filter(Q(name__icontains=query),isDeleted=True)
        artists = User.objects.filter(Q(first_name__icontains=query) | Q(last_name__icontains=query), role="Artist",isDeleted=True)

        if songs:
            song_serializer = SongSerializer(songs, many=True,context={'request': request})
            artist_ids = songs.values_list('artist_id', flat=True)
            artists = User.objects.filter(id__in=artist_ids, role="Artist")
            artist_serializer = UserSerializer(artists, many=True,context={'request': request})
            return Response({
                'songs': song_serializer.data,
                'artists': artist_serializer.data
            })

        if artists:
            artist_serializer = UserSerializer(artists, many=True,context={'request': request})
            song_ids = Song.objects.filter(artist_id__in=artists).values_list('id', flat=True)
            songs = Song.objects.filter(id__in=song_ids,isDeleted=True)
            song_serializer = SongSerializer(songs, many=True,context={'request': request})
            return Response({
                'songs': song_serializer.data,
                'artists': artist_serializer.data
            })

        return Response({
            'songs': [],
            'artists': []
    })






