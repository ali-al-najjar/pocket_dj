from django.urls import path
from .views import UserDetails,RegisterUser,CreateSong,CreateMood,CreateRemix,CreateRequest,GetUsers,GetArtists,GetSongs,GetRemixes,GetRequests
urlpatterns = [
  path('get-details',UserDetails.as_view()),
  path('register',RegisterUser.as_view()),
  path('song/create', CreateSong.as_view()),
  path('mood/create', CreateMood.as_view()),
  path('remix/create', CreateRemix.as_view()),
  path('request/create', CreateRequest.as_view()),
  path('users/', GetUsers.as_view()),
  path('songs/', GetSongs.as_view()),
  path('remixes/', GetRemixes.as_view()),
  path('artists/', GetArtists.as_view()),
  # path('favorites/', GetFavorites.as_view()),
  path('requests/', GetRequests.as_view()),
]