from django.urls import path
from .views import UserDetails,RegisterUser,CreateSong,CreateMood,CreateRemix,CreateRequest,GetUsers
urlpatterns = [
  path('get-details',UserDetails.as_view()),
  path('register',RegisterUser.as_view()),
  path('song/create', CreateSong.as_view()),
  path('mood/create', CreateMood.as_view()),
  path('remix/create', CreateRemix.as_view()),
  path('request/create', CreateRequest.as_view()),
  path('users/', GetUsers.as_view()),
]