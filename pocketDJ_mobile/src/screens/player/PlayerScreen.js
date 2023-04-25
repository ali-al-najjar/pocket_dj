import { View, Text, TextInput, TouchableOpacity, Image} from "react-native";
import styles from './styles';
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import constants from '../../constants/styles';
import { SafeAreaView } from "react-native-safe-area-context";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";

const PlayerScreen = () => {
  return (
  <SafeAreaView>
  <AudioPlayer />
  </SafeAreaView>

  )}

export default PlayerScreen;