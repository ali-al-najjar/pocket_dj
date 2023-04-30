import os
import tempfile
import shutil
import librosa
from pydub import AudioSegment
from librosa.core import pitch

# Set the directory where the music files are located
music_dir = './media/music/'

# Create a temporary directory
temp_dir = tempfile.mkdtemp(prefix='pocketdj_', dir='./media/temporary')

# Initialize an empty list to store the song data
songs = []

# Loop through each file in the directory
for file_name in os.listdir(music_dir):
    # Check if the file is an audio file (MP3, WAV, etc.)
    if file_name.endswith('.mp3') or file_name.endswith('.wav'):
        # Load the audio file
        file_path = os.path.join(music_dir, file_name)
        song = AudioSegment.from_file(file_path)
        # Add the song data to the list
        songs.append(song)

# Export the first song to a temporary file in the temporary directory
temp_file_1 = os.path.join(temp_dir, 'temp1.wav')
songs[0].export(temp_file_1, format='wav')
# Load the audio data using librosa
y1, sr1 = librosa.load(temp_file_1)

# Export the second song to a temporary file in the temporary directory
temp_file_2 = os.path.join(temp_dir, 'temp2.wav')
songs[1].export(temp_file_2, format='wav')
# Load the audio data using librosa
y2, sr2 = librosa.load(temp_file_2)

# Find the time where the frequency spectra of both songs match
match_time = librosa.core.samples_to_time(librosa.core.pitch.find_pitch_matches(y1, y2))

# Convert match time to milliseconds
match_time_ms = match_time * 1000

# Apply crossfade
fade_out = songs[0][match_time_ms:].fade_out(1000)  # 1 second fade out
fade_in = songs[1][:match_time_ms].fade_in(1000)  # 1 second fade in

# Concatenate the faded sections and export the resulting audio file
result = fade_out + fade_in + songs[1][match_time_ms:]
result.export(os.path.join(music_dir, 'result.mp3'), format="mp3")

# Remove the temporary directory
shutil.rmtree(temp_dir)
