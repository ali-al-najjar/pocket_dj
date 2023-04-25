import { Text, TouchableOpacity, View } from "react-native"
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";


const MoodItem = ({id , title}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => {navigation.navigate('Player')}}>
    <View style={styles.mood}>
    <Text style={styles.mood_text}>{title}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default MoodItem;