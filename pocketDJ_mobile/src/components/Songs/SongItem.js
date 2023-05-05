import { ImageBackground, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";



const SongItem = ({id , name ,cover}) => {
  const navigation = useNavigation();

  const handleSong=()=>{
    navigation.navigate('Player', {
      title: name,
      image: { uri: cover },
      });
  }
  
  return (
    <TouchableOpacity onPress={handleSong}>
    <ImageBackground 
    source={{ uri: cover }}
    imageStyle={{ borderRadius: 10}}
    style = {[styles.song_item, { borderRadius: 5 }]}>
    <Text style={styles.song_item_name}>{name}</Text>
    </ImageBackground>
    </TouchableOpacity>
  )
}

export default SongItem;