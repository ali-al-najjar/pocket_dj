import random
from pydub import AudioSegment
import os

songs_array = []
for file in os.listdir('../media/audio'):
    if file.endswith('.mp3') or file.endswith('.wav') or file.endswith('.ogg'):
        songs_array.append(os.path.join('../media/audio', file))  # Use os.path.join to join the file name with the directory path

mixed_songs = []

for song in songs_array:
    duration = random.randint(30, 180)  # Choose a random duration between 30 and 180 seconds
    mixed_songs.append((song, duration))  # Store the song and duration as a tuple in the mixed_songs array
random.shuffle(mixed_songs)

mix = AudioSegment.empty()

for song, duration in mixed_songs:
    song_audio = AudioSegment.from_file(song)
    mix = mix + song_audio[:duration * 1000]  # Convert duration to milliseconds and add the song to the mix

mix.export('../media/mix/songs.mp3', format='mp3')  # Save the mix as an mp3 file
