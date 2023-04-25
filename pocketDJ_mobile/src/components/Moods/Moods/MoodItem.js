import { Text, TouchableOpacity, View } from "react-native"
import styles from "./styles";

const MoodItem = ({id , title}) => {
  return (
    <TouchableOpacity onPress={() => {}}>
    <View style={styles.mood}>
    <Text style={styles.mood_text}>{title}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default MoodItem;