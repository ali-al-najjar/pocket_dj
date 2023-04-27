import { SliderComponent, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import Button from "../../components/Button/Button";
import Colors from "../../constants/colors";
import Slider from '@react-native-community/slider'


const AudioPlayer = () => {
  const navigation = useNavigation();
  const [isPlaying, setIsPlaying] = useState(false);
  
  const togglePlayer = () => {
    setIsPlaying(!isPlaying);
  }
  
  return (
    <SafeAreaView style={styles.audioScreenContainer}>
    <View style={styles.container}>
    <View>
      <Slider
        style={styles.progressBar}
        value={10}
        minimumValue={0}
        maximumValue={100}
        thumbTintColor={Colors.secondaryColor}
        minimumTrackTintColor={Colors.secondaryColor}
        maximumTrackTintColor={Colors.black}
        onSlidingComplete={()=>{}}
       />
    </View>
    <View style={styles.progressBarCounter}>
      <Text style={styles.progressBarCounterStart}>0:00</Text>
      <Text style={styles.progressBarCounterStart}>3:50</Text>
    </View>
    <View style={styles.audio_player}>

    <TouchableOpacity>
    <Ionicons name="ios-play-back-circle-outline" size={70} color={Colors.black} />
    </TouchableOpacity>
    <TouchableOpacity onPress={togglePlayer}>
      {isPlaying ? (
            <Ionicons name="ios-pause-circle-outline" size={120} color={Colors.black} />
          ) : (
            <Ionicons name="ios-play-circle-outline" size={120} color={Colors.black} />
          )}
    </TouchableOpacity>
    <TouchableOpacity>
    <Ionicons name="ios-play-forward-circle-outline" size={70} color={Colors.black} />
    </TouchableOpacity>
    </View>
    <Button title="Save" onPress={() => console.log("Your Remix is saved")} />
    </View>
    </SafeAreaView>
  )
}

export default AudioPlayer;