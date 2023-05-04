import { View, Text,Image} from "react-native";
import styles from './styles';
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const ProfileScreen = () => {
  const user = useSelector(state => state.user);

  console.log(user)
  return (
  <SafeAreaView style={styles.container}>
  <View style={styles.cover_container}>
  <Image source={{uri:`http://192.168.1.127:8000/${user.profile}`}}
  style={styles.imageStyle}></Image>
  </View>
  <View style={styles.mood_title}>
    <Text style={styles.mood_title_text}>{user.first_name} {user.last_name}</Text>
  </View>
  </SafeAreaView>

  )}

export default ProfileScreen;