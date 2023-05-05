import { ImageBackground, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";



const LatestSongItem = ({id , Name ,Cover,ArtistName}) => {
  const navigation = useNavigation();

  const handleLatestSong=()=>{
    navigation.navigate('Player', {
      title: name,
      image: { uri: cover },
      });
  }
  
  return (
    <TouchableOpacity onPress={handleLatestSong}>
    <ImageBackground 
    source={{ uri: Cover }}
    imageStyle={{ borderRadius: 10}}
    style = {[styles.latest_song_item, { borderRadius: 5 }]}>
    <Text style={styles.latest_artist_name}>{ArtistName}</Text>
    <Text style={styles.latest_song_item_name}>{Name}</Text>
    </ImageBackground>
    </TouchableOpacity>
  )
}

export default LatestSongItem;