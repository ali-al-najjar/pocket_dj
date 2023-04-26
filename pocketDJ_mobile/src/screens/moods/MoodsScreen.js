import { View, Text, TextInput, TouchableOpacity, Image, FlatList,RefreshControl,StatusBar} from "react-native";
import styles from './styles';
import constants from '../../constants/styles';
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import { DUMMY_DATA } from "../../../data/dummy";
import MoodItem from "../../components/Moods/Moods/MoodItem";
import { SafeAreaView } from "react-native-safe-area-context";

const renderItem = ({item}) => {
  console.log("Rendering item with ID:", item.image);
  return <MoodItem id={item.id} title={item.title} image={item.image} />
}

const MoodsScreen = () => {
  const navigation = useNavigation();
  return(
    <>
    <SafeAreaView style={styles.topSafeArea} >
    <Image 
      source={require('../../../assets/mood.png')}
      style={styles.innerImageContainer}
    />
    </SafeAreaView>
    <View style={styles.h1_view}>
    <Text style={styles.h1_text}>What are you up to?</Text>
    </View>
    <FlatList 
      style={styles.flatlist}
      data= {DUMMY_DATA}
      keyExtractor={item => item.id}
      renderItem = {renderItem}
      numColumns={2}
      />
    </>
  )
}

export default MoodsScreen;
