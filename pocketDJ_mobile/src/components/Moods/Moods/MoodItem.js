import { ImageBackground, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";



const MoodItem = ({id , title ,image}) => {
  const navigation = useNavigation();
  console.log(image)

  const handleMood=()=>{
    navigation.navigate('Player', {
      title: title,
      image: image,
      });
  }
  
  return (
    <TouchableOpacity onPress={handleMood}>
    <ImageBackground 
    source={image}
    imageStyle={{ borderRadius: 10}}
    style = {[styles.mood, { borderRadius: 5 }]}>
    <Text style={styles.mood_text}>{title}</Text>
    </ImageBackground>
    </TouchableOpacity>
  )
}

export default MoodItem;