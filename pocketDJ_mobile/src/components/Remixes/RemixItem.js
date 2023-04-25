import { Text, TouchableOpacity, View } from "react-native"
import styles from "./styles";

const RemixItem = ({id , title, mood,date}) => {
  return (
      <View style={styles.mood}>
      <Text style={styles.mood_text} >{title} {id}</Text>
      
      <TouchableOpacity onPress={() => {}}>
      </TouchableOpacity>
      </View>

  )
}

export default MoodItem;