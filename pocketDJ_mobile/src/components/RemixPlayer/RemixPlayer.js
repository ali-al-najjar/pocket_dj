import {Text, TouchableOpacity, View } from "react-native";
import { Audio } from 'expo-av';
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import Button from "../Button/Button";
import Colors from "../../constants/colors";
import Slider from '@react-native-community/slider';

const RemixPlayer = ({ AudioURL }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const [duration, setDuration] = useState();
  const [position, setPosition] = useState(0);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    if (sound) {
      sound.setOnPlaybackStatusUpdate(null);
      sound.stopAsync();
      sound.unloadAsync();
      setSound(null);
      setIsPlaying(false);
    }
    setAudio(AudioURL.audio);
    const loadAudio = async (audio) => {
      if (!audio) {
        console.error('Audio file URL is null or undefined');
        return;
      }
    
      const { sound } = await Audio.Sound.createAsync({ uri: audio });
      setSound(sound);
      
      sound.setOnPlaybackStatusUpdate(status => {
        if (status.isLoaded && !status.isBuffering) {
          setDuration(status.durationMillis);
        }
    
        if (status.didJustFinish) {
          stop();
        }
    
        setPosition(status.positionMillis);
      });
    
      await sound.playAsync();
      setIsPlaying(true);
    };
    loadAudio();
  }, [AudioURL]);

  

  useEffect(() => {
    const updatePosition = (status) => {
      if (status.isLoaded && status.isPlaying) {
        setPosition(status.positionMillis / 1000);
      }
    };

    if (sound) {
      sound.setOnPlaybackStatusUpdate(updatePosition);
    }

    return () => {
      if (sound) {
        sound.setOnPlaybackStatusUpdate(null);
      }
    };
  }, [sound]);

  const togglePlayer = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
        setIsPlaying(false);
      } else {
        await sound.playAsync();
        setIsPlaying(true);
      }
    } else {
      if (!audio) {
        console.error('Audio file URL is null or undefined');
        return;
      }
      const { sound } = await Audio.Sound.createAsync({ uri: audio });
      setSound(sound);
      await sound.playAsync();
      setIsPlaying(true);
      const { durationMillis } = await sound.getStatusAsync();
      setDuration(durationMillis / 1000);
      if (!isNaN(durationMillis)) {
        setDuration(durationMillis / 1000);
    }
  };
  }
  const stop = async () => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
      setSound(null);
      setIsPlaying(false);
      setDuration(0);
      setPosition(0);
    }
  };

  const handleSeekBar = (duration) => {
    setPosition(duration);
    sound.setPositionAsync(duration * 1000);
  };
  
  return (
    <SafeAreaView style={styles.audioScreenContainer}>
      <View >
        <View>
        <Slider
            minimumValue={0}
            maximumValue={1}
            value={0.2}
            minimumTrackTintColor={Colors.primaryColor}
            maximumTrackTintColor={Colors.black}
            onValueChange={handleSeekBar}
          />
        </View>
        <View style={styles.progressBarCounter}>
          <Text style={styles.progressBarCounter}>{position}</Text>
          <Text style={styles.progressBarCounter}>{duration}</Text>
        </View>
        <View style={styles.container}>
        <View style={styles.audio_player}>
          <TouchableOpacity>
            <Ionicons name="ios-play-back-circle-outline" size={50} color={Colors.black} />
          </TouchableOpacity>
          <TouchableOpacity onPress={togglePlayer}>
            {isPlaying ? (
              <Ionicons name="ios-pause-circle-outline" size={100} color={Colors.black} />
            ) : (
              <Ionicons name="ios-play-circle-outline" size={100} color={Colors.black} />
            )}
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="ios-play-forward-circle-outline" size={50} color={Colors.black} />
          </TouchableOpacity>
        </View>
        <Button title="Save" onPress={() => console.log("Your Remix is saved")} />
      </View>
      </View>
    </SafeAreaView>
  );
};

export default RemixPlayer;
