import { ImageBackground, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";


const MoodItem = ({id , title ,image}) => {
  const navigation = useNavigation();
  console.log(image)
  return (
    <TouchableOpacity onPress={() => {navigation.navigate('Player')}}>
    <ImageBackground 
    source={require("../../../../assets/images/chill.jpg")}
    imageStyle={{ borderRadius: 10}}
    style = {[styles.mood, { borderRadius: 5 }]}>
    <Text style={styles.mood_text}>{title}</Text>
    </ImageBackground>
    </TouchableOpacity>
  )
}

export default MoodItem;