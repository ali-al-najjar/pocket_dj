import { View, Text, TextInput, TouchableOpacity, Image} from "react-native";
import styles from './styles';
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import constants from '../../constants/styles';
import { SafeAreaView } from "react-native-safe-area-context";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";

const PlayerScreen = () => {
  return (
  <SafeAreaView style={styles.container}>
  <View style={styles.cover_container}>
  <Image source={require('../../../assets/images/chill.jpg')}
  style={styles.imageStyle}></Image>
  </View>
  <View style={styles.mood_title}>
    <Text style={styles.mood_title_text}>Party</Text>
  </View>
  <AudioPlayer />
  </SafeAreaView>

  )}

export default PlayerScreen;