from django.contrib import admin
from .models import User,Song, Favorite, Remix, Request

admin.site.register(User)
admin.site.register(Song)
admin.site.register(Favorite)
admin.site.register(Remix)
admin.site.register(Request)
