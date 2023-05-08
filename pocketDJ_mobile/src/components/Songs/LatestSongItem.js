import { ImageBackground, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import Typewriter from 'react-native-typewriter';
import { useEffect } from "react";


const LatestSongItem = ({id , Name , Cover, ArtistName, Audio, Duration}) => {
  const navigation = useNavigation();
  const durationinMillis =  Math.ceil(Duration * 60000)
  const handleLatestSong=()=>{
    navigation.navigate('Song Player', {
      title: Name,
      image: { uri: Cover },
      AudioURL: {audio:Audio},
      Duration : {durationinMillis}
      });
  }
  
  useEffect(()=>{
    console.log("Audio", Audio)
    console.log("duration", durationinMillis , Duration)
  },[Audio])
  
  return (
    <TouchableOpacity onPress={handleLatestSong}>
    <ImageBackground 
    source={{ uri: Cover }}
    imageStyle={{ borderRadius: 10}}
    style = {[styles.latest_song_item, { borderRadius: 5 }]}>
    <Typewriter
      style={styles.typewriter}
      typing={1}
      maxDelay={50}
      minDelay={20}
    >
    <View style={styles.latest_items}>
    <Text style={styles.latest_song}>Latest Song</Text>
    <Text style={styles.latest_artist_name}>{ArtistName}</Text>
    <Text style={styles.latest_song_item_name}>{Name}</Text>
    </View>
    </Typewriter>
    </ImageBackground>
    </TouchableOpacity>
  )
}

export default LatestSongItem;