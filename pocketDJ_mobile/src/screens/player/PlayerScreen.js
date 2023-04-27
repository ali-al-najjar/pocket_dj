import { View, Text, TextInput, TouchableOpacity, Image} from "react-native";
import styles from './styles';
import {useState,useEffect} from 'react';
import { useNavigation } from "@react-navigation/native";
import constants from '../../constants/styles';
import { SafeAreaView } from "react-native-safe-area-context";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import { useRoute } from '@react-navigation/native';

const PlayerScreen = () => {
  const [moodTitle, setMoodTitle] = useState('');
  const [moodImage, setMoodImage] = useState('');
  const route = useRoute();
  const { title, image } = route.params;

  useEffect(() => {
    setMoodTitle(title);
    setMoodImage(image);
    }, []);


  return (
  <SafeAreaView style={styles.container}>
  <View style={styles.cover_container}>
  <Image source={moodImage}
  style={styles.imageStyle}></Image>
  </View>
  <View style={styles.mood_title}>
    <Text style={styles.mood_title_text}>{moodTitle}</Text>
  </View>
  <AudioPlayer />
  </SafeAreaView>

  )}

export default PlayerScreen;