import { View, Text, TextInput, TouchableOpacity, Image} from "react-native";
import styles from '../styles';
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import MoodsList from "../components/Moods/MoodsList";

const MoodsScreen = () => {
  const navigation = useNavigation();
  return(
    <View>
    <Image 
    source={require('../assets/mood.svg')}/>
    <Text>What are you up to?</Text>
    <MoodsList></MoodsList>
    </View>
  )
}

export default MoodsScreen;
