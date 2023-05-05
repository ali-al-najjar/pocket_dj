import { ImageBackground, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";



const MoodItem = ({id , name ,cover}) => {
  const navigation = useNavigation();

  const handleMood=()=>{
    navigation.navigate('Player', {
      title: name,
      image: { uri: cover },
      });
  }
  
  return (
    <TouchableOpacity onPress={handleMood}>
    <ImageBackground 
    source={{ uri: cover }}
    imageStyle={{ borderRadius: 10}}
    style = {[styles.mood, { borderRadius: 5 }]}>
    <Text style={styles.mood_text}>{name}</Text>
    </ImageBackground>
    </TouchableOpacity>
  )
}

export default MoodItem;