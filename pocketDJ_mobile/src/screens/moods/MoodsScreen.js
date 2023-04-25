import { View, Text, TextInput, TouchableOpacity, Image, FlatList,RefreshControl} from "react-native";
import styles from './styles';
import constants from '../../constants/styles';
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import { DUMMY_DATA } from "../../../data/dummy";
import MoodItem from "../../components/Moods/Moods/MoodItem";
import { SafeAreaView } from "react-native-safe-area-context";

const renderItem = ({item}) => {
  console.log("Rendering item with ID:", item.id);
  return <MoodItem id={item.id} title={item.title}/>
}

const MoodsScreen = () => {
  const navigation = useNavigation();
  return(
    <SafeAreaView>
    <View style={styles.imageContainer}>
    <Image 
      source={require('../../../assets/mood.png')}
      style={styles.moodsContainer}
    />
    </View>
    <View style={constants.formContainer}>
    <View style={constants.h1_view}>
    <Text style={constants.h1_text}>What are you up to?</Text>
    </View>
    </View>
    <FlatList 
      style={styles.flatlist}
      data= {DUMMY_DATA}
      keyExtractor={item => item.id}
      renderItem = {renderItem}
      numColumns={2}
      />

    </SafeAreaView>
  )
}

export default MoodsScreen;
