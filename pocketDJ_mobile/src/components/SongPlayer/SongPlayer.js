import { SliderComponent, Text, TouchableOpacity, View } from "react-native";
import { Audio } from 'expo-av';
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import Button from "../Button/Button";
import Colors from "../../constants/colors";
import Slider from '@react-native-community/slider';

const SongPlayer = ({ AudioURL,Duration }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    return () => {
      if (sound) {
        sound.stopAsync();
        sound.unloadAsync();
      }
    };
  }, [sound]);


  useEffect(() => {
    if (sound) {
      sound.setOnPlaybackStatusUpdate(null);
      sound.stopAsync();
      sound.unloadAsync();
      setSound(null);
      setIsPlaying(false);
    }
    setAudio(AudioURL.audio);
    
  }, [AudioURL]);

  useEffect(() => {
    if (sound) {
      sound.setOnPlaybackStatusUpdate(async (status) => {
        if (status.isLoaded) {
          setPosition(await status.positionMillis / 1000);
          setIsPlaying(status.isPlaying);
        }
      });
      
    }
  }, [sound]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const togglePlayer = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
        setIsPlaying(false);
      } else {
        await sound.playAsync();
        setIsPlaying(true);
        console.log(position)
      }
    } else {
      if (!audio) {
        console.error('Audio file URL is null or undefined');
        return;
      }
      const { sound } = await Audio.Sound.createAsync({ uri: audio }, {shouldPlay: true });
      setSound(sound);
      console.log(sound)
      await sound.playAsync();
      setIsPlaying(true);
      setDuration(Duration / 1000);
      
    }
  };  

  const stop = async () => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
      setSound(null);
      setIsPlaying(false);
    }
  };

  const handleSeekBar = (value) => {
    setPosition(value);
    sound.setPositionAsync(value * 1000);
  };
  
  return (
    <SafeAreaView style={styles.audioScreenContainer}>
      <View style={styles.container}>
        <View>
          <Slider
            minimumValue={0}
            maximumValue={duration}
            value={position}
            onValueChange={handleSeekBar}
            maximumTrackTintColor={Colors.primaryColor}
            minimumTrackTintColor={Colors.black}
          />
        </View>
        <View style={styles.progressBar}>
          <Text style={styles.progressBarCounter}>{formatTime(position)}</Text>
          <Text style={styles.progressBarCounter}>{formatTime(duration)}</Text>
        </View>
        <View style={styles.audio_player}>
          <TouchableOpacity>
            <Ionicons name="ios-play-back-circle-outline" size={60} color={Colors.black} />
          </TouchableOpacity>
          <TouchableOpacity onPress={togglePlayer}>
            {isPlaying ? (
              <Ionicons name="ios-pause-circle-outline" size={90} color={Colors.primaryColor} />
            ) : (
              <Ionicons name="ios-play-circle-outline" size={90} color={Colors.black} />
            )}
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="ios-play-forward-circle-outline" size={60} color={Colors.black} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};


export default SongPlayer;
