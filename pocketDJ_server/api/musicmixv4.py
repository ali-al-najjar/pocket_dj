import random
from pydub import AudioSegment
from pydub.utils import make_chunks
from pydub.silence import detect_silence
import os

songs_array = []
for file in os.listdir('../media/audio'):
    if file.endswith('.mp3') or file.endswith('.wav') or file.endswith('.ogg'):
        songs_array.append(os.path.join('../media/audio', file))

mixed_songs = []

for song in songs_array:
    duration = random.randint(30, 60)  # Choose a random duration between 30 and 180 seconds
    mixed_songs.append((song, duration))  # Store the song and duration as a tuple in the mixed_songs array
random.shuffle(mixed_songs)

mix = AudioSegment.empty()

for i, (song, duration) in enumerate(mixed_songs):
    song_audio = AudioSegment.from_file(song)[:duration * 1000]  # Convert duration to milliseconds and load the song
    chunks = make_chunks(song_audio, 1000)  # Split the song into 1-second chunks
    non_silent_chunks = [chunk for chunk in chunks if detect_silence(chunk, min_silence_len=50, silence_thresh=-50)]  # Detect non-silent chunks
    if non_silent_chunks:  # If there are non-silent chunks, concatenate them to form the trimmed song
        trimmed_song_audio = non_silent_chunks[0]
        for chunk in non_silent_chunks[1:]:
            trimmed_song_audio = trimmed_song_audio + chunk
    else:  # If there are no non-silent chunks, use the entire song
        trimmed_song_audio = song_audio
    if i < len(mixed_songs) - 1:  # If it's not the last song, switch on a random segment in the next song
        next_song_audio = AudioSegment.from_file(mixed_songs[i + 1][0])
        chunks = make_chunks(next_song_audio, 1000)  # Split the next song into 1-second chunks
        non_silent_chunks = [chunk for chunk in chunks if detect_silence(chunk, min_silence_len=50, silence_thresh=-50)]  # Detect non-silent chunks
        if non_silent_chunks:  # If there are non-silent chunks, choose a random switch point and concatenate the chunks from that point
            switch_point = random.randint(0, len(non_silent_chunks) - 1)
            next_song_audio = non_silent_chunks[switch_point]
            for chunk in non_silent_chunks[switch_point + 1:]:
                next_song_audio = next_song_audio + chunk
        else:  # If there are no non-silent chunks, use the entire next song
            switch_point = 0
            next_song_audio = next_song_audio
        song_audio = song_audio + next_song_audio[switch_point * 1000:]  # Add the next song from the switch point to the end
    mix = mix + song_audio  # Add the song to the mix

mix.export('../media/mix/songs1.mp3', format='mp3')  # Save the mix as an mp3 file
