import { Text, TouchableOpacity, View } from "react-native"
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import Button from "../../components/Button/Button";


const AudioPlayer = () => {
  const navigation = useNavigation();
  const [isPlaying, setIsPlaying] = useState(false);
  
  const togglePlayer = () => {
    setIsPlaying(!isPlaying);
  }
  
  return (
    <SafeAreaView style={styles.audioScreenContainer}>
    <View style={styles.audio_player}>
    <TouchableOpacity>
    <Ionicons name="ios-play-back-circle-outline" size={70} color="#FC6422" />
    </TouchableOpacity>
    <TouchableOpacity onPress={togglePlayer}>
      {isPlaying ? (
            <Ionicons name="ios-pause-circle-outline" size={120} color="#FC6422" />
          ) : (
            <Ionicons name="ios-play-circle-outline" size={120} color="#FC6422" />
          )}
    </TouchableOpacity>
    <TouchableOpacity>
    <Ionicons name="ios-play-forward-circle-outline" size={70} color="#FC6422" />
    </TouchableOpacity>
    </View>
    <Button title="Save" onPress={() => console.log("Your Remix is saved")} />
    </SafeAreaView>
  )
}

export default AudioPlayer;