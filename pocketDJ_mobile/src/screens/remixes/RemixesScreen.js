import { View, Text, TextInput, TouchableOpacity, Image, FlatList,RefreshControl} from "react-native";
import styles from './styles';
import constants from '../../constants/styles';
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import { DUMMY_DATA } from "../../../data/dummy";
import RemixItem from "../../components/Remixes/RemixItem";

const renderItem = ({item}) => {
  console.log("Rendering item with ID:", item.id);
  return <MoodItem id={item.id} title={item.title}/>
}

const MoodsScreen = () => {
  const navigation = useNavigation();
  return(
    <View>
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
    <FlatList 
      data= {DUMMY_DATA}
      keyExtractor={item => item.id}
      renderItem = {renderItem}
      numColumns={2}
      />
    </View>
    </View>
  )
}

export default MoodsScreen;
