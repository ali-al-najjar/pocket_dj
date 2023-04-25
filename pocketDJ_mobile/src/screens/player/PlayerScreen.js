import { View, Text, TextInput, TouchableOpacity, Image} from "react-native";
import styles from './styles';
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import constants from '../../constants/styles';
import { SafeAreaView } from "react-native-safe-area-context";

const PlayerScreen = () => {
  return (
  <SafeAreaView>
  <Text>This is the player page</Text>
  </SafeAreaView>

  )}

export default PlayerScreen;