import { ImageBackground, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";



const ArtistItem = ({id , name ,cover}) => {
  const navigation = useNavigation();

  const handleArtist=()=>{
    navigation.navigate('Player', {
      title: name,
      image: { uri: cover },
      });
  }
  
  return (
    <TouchableOpacity onPress={handleArtist}>
    <ImageBackground 
    source={{ uri: cover }}
    imageStyle={{ borderRadius: 10}}
    style = {[styles.artist_item, { borderRadius: 5 }]}>
    <Text style={styles.artist_item_name}>{name}</Text>
    </ImageBackground>
    </TouchableOpacity>
  )
}

export default ArtistItem;