from django.urls import path
from .views import UserDetails,RegisterUser,CreateSong,CreateMood,CreateRemix,CreateRequest,GetUsers,GetArtists,GetSongs,GetRemixes,GetRequests,GetMoods,DeleteSong,DeleteMood,DeleteRemix,DeleteRequest,DeleteUser,UpdateUserProfile
urlpatterns = [
  path('get-details',UserDetails.as_view()),
  path('update/profile',UpdateUserProfile.as_view()),
  path('register',RegisterUser.as_view()),
  path('song/create', CreateSong.as_view()),
  path('song/delete/<int:pk>',DeleteSong.as_view()),
  path('mood/create', CreateMood.as_view()),
  path('mood/delete/<int:pk>',DeleteMood.as_view()),
  path('remix/create', CreateRemix.as_view()),
  path('remix/delete/<int:pk>',DeleteRemix.as_view()),
  path('request/create', CreateRequest.as_view()),
  path('request/delete/<int:pk>',DeleteRequest.as_view()),
  path('users/', GetUsers.as_view()),
  path('user/delete/<int:pk>',DeleteUser.as_view()),
  path('songs/', GetSongs.as_view()),
  path('remixes/', GetRemixes.as_view()),
  path('artists/', GetArtists.as_view()),
  # path('favorites/', GetFavorites.as_view()),
  path('requests/', GetRequests.as_view()),
  path('moods/', GetMoods.as_view()),
]