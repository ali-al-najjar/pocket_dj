from django.urls import path
from .views import UserDetailAPI,RegisterUserAPIView,SongCreateAPIView
urlpatterns = [
  path('get-details',UserDetailAPI.as_view()),
  path('register',RegisterUserAPIView.as_view()),
  path('song/create', SongCreateAPIView.as_view())
]