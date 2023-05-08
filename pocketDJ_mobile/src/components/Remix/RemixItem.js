import { Text, TouchableOpacity, View } from "react-native"
import styles from "./styles";
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import cover from '../../../assets/mixer.png'

const RemixItem = ({id , title, mood,date,audio}) => {
  const navigation = useNavigation();
  const handleRemix=()=>{
    navigation.navigate('Song Player', {
      title: title,
      image: { uri: 'http://192.168.1.127:8000/media/images/covers/mixer.png' },
      AudioURL: {audio},
      });
  }
  return (
      <View style={styles.remixContainer}>
      <View style={styles.remixInfo}>
      <Text style={styles.remixTitle}>{title}</Text>
      <Text style={styles.remixMood}>{mood}</Text>
      <Text style={styles.remixDate}>{date}</Text>
      </View>

      <TouchableOpacity onPress={handleRemix}>
      <View style={styles.play_icon}>
      <FontAwesome5 name="play" size={24} color="#87F966" />
      </View>
      </TouchableOpacity>
      </View>

  )
}

export default RemixItem;