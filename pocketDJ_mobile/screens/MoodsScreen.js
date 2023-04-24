import { View, Text, TextInput, TouchableOpacity, Image} from "react-native";
import styles from '../styles';
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import MoodsList from "../components/Moods/MoodsList";

const MoodsScreen = () => {
  const navigation = useNavigation();
  return(
    <View>
    <View style={styles.imageContainer}>
    <Image 
      source={require('../assets/mood.png')}
      style={styles.registerBanner}/>
    </View>
    <View style={styles.loginContainer}>
    <Text>What are you up to?</Text>
    <MoodsList></MoodsList>
    </View>
    </View>
  )
}

export default MoodsScreen;
