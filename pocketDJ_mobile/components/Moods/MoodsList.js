import { View, Text, TextInput, TouchableOpacity, Image} from "react-native";
import styles from '../../styles';
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";

const MoodsList = () => {
  const navigation = useNavigation();
  return(
    <View>
      <Text>List of Moods</Text>
      
    </View>
  )
}

export default MoodsList;