import { Text, TouchableOpacity, View } from "react-native"
import styles from "./styles";
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const RemixItem = ({id , title, mood, date, audio, cover}) => {
  const navigation = useNavigation();
  const handleRemix=()=>{
    navigation.navigate('Song Player', {
      title: title,
      image: { uri: `http://192.168.1.127:8000/media/${cover}` },
      AudioURL: {audio},
      });
  }

  const dateString = date;
  const dateObj = new Date(dateString);
  const formattedDate = dateObj.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
});
  return (
      <View style={styles.remixContainer}>
      <View style={styles.remixInfo}>
      <Text style={styles.remixTitle}>{title}</Text>
      <Text style={styles.remixMood}>{mood}</Text>
      <Text style={styles.remixDate}>{formattedDate}</Text>
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