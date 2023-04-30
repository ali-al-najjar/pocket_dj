import random
from pydub import AudioSegment
# from pydub.effects import equalize
from pydub.silence import strip_silence
import os

songs_array = []
for file in os.listdir('../media/audio'):
    if file.endswith('.mp3') or file.endswith('.wav') or file.endswith('.ogg'):
        songs_array.append(os.path.join('../media/audio', file))

mixed_songs = []

for song in songs_array:
    duration = random.randint(30, 180)  # Choose a random duration between 30 and 180 seconds
    mixed_songs.append((song, duration))  # Store the song and duration as a tuple in the mixed_songs array
random.shuffle(mixed_songs)

mix = AudioSegment.empty()

for i, (song, duration) in enumerate(mixed_songs):
    song_audio = AudioSegment.from_file(song)[:duration * 1000]  # Convert duration to milliseconds and load the song
    song_audio = strip_silence(song_audio, silence_len=500, silence_thresh=-60)  # Remove silence from the beginning and end of the audio segment
    if i > 0:  # If it's not the first song, add a fade-in effect
        song_audio = song_audio.fade_in(2000)  # Fade-in for 2 seconds
    if i < len(mixed_songs) - 1:  # If it's not the last song, switch on a random segment in the next song and add a fade-out effect
        next_song_audio = AudioSegment.from_file(mixed_songs[i + 1][0])
        next_song_audio = strip_silence(next_song_audio, silence_len=500, silence_thresh=-60)
        switch_point = random.randint(5000, len(next_song_audio) - 5000)  # Choose a random point to switch on in the next song
        next_song_audio = next_song_audio[switch_point:]
        song_audio = song_audio.fade_out(2000) + next_song_audio.fade_in(2000)  # Add a fade-out effect to the current song and a fade-in effect to the next song
    # song_audio = equalize(song_audio, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])  # Apply a flat equalization effect
    mix = mix + song_audio  # Add the song to the mix

mix.export('../media/mix/songs2.mp3', format='mp3')  # Save the mix as an mp3 file
