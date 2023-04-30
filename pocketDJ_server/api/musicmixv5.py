import random
from pydub import AudioSegment
from pydub.utils import make_chunks
from pydub.silence import detect_nonsilent
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
    non_silent_audio = detect_nonsilent(song_audio, min_silence_len=50, silence_thresh=-50)  # Detect non-silent audio
    # if non_silent_audio:  # If there is non-silent audio, trim the song
    #     trimmed_song_audio = song_audio[non_silent_audio[0]:non_silent_audio[1]]
    # else:  # If there is no non-silent audio, use the entire song
    trimmed_song_audio = song_audio
    if i == 0:
        mix = trimmed_song_audio
    else:
        crossfade_len = random.randint(1000, 5000)  # Choose a random crossfade length between 1 and 5 seconds
        last_song_end = mix[-crossfade_len:]  # Get the last part of the previous song that will be crossfaded
        trimmed_song_start = trimmed_song_audio[:crossfade_len]  # Get the first part of the current song that will be crossfaded
        if last_song_end.max_dBFS - trimmed_song_start.max_dBFS < -3:  # If the difference in loudness between the two parts is greater than 3 dB, don't crossfade
            mix = mix + trimmed_song_audio
        else:
            if non_silent_audio:  # Add a check to make sure that non_silent_audio is not empty
                mix = mix[:-crossfade_len] + AudioSegment.crossfade(last_song_end, trimmed_song_start) + trimmed_song_audio[crossfade_len:]
            else:
                mix = mix + trimmed_song_audio

mix.export('../media/mix/songs3.mp3', format='mp3')  # Save the mix as an mp3 file
