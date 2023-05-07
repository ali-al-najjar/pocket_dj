import { Text, TouchableOpacity, View } from "react-native"
import styles from "./styles";
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const RemixItem = ({id , title, mood,date}) => {
  const navigation = useNavigation();
  return (
      <View style={styles.remixContainer}>
      <View style={styles.remixInfo}>
      <Text style={styles.remixTitle}>{title}</Text>
      <Text style={styles.remixMood}>{mood}</Text>
      <Text style={styles.remixDate}>{date}</Text>
      </View>

      <TouchableOpacity onPress={() => {}}>
      <View style={styles.play_icon}>
      <FontAwesome5 name="play" size={24} color="#87F966" />
      </View>
      </TouchableOpacity>
      </View>

  )
}

export default RemixItem;