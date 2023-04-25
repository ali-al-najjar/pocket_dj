import { View, Text, TextInput, TouchableOpacity, Image, FlatList,RefreshControl} from "react-native";
import styles from './styles';
import constants from '../../constants/styles';
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import { DUMMY_DATA } from "../../../data/remixes";
import RemixItem from "../../components/Remix/RemixItem";
import { SafeAreaView } from "react-native-safe-area-context";

const renderItem = ({item}) => {
  console.log("Rendering item with ID:", item.id);
  return <RemixItem id={item.id} title={item.title} mood={item.mood} date={item.date} />}

const RemixesScreen = () => {
  const navigation = useNavigation();
  return(
    <SafeAreaView>
    <View>
    <View style={styles.imageContainer}>
    </View>
    <View style={constants.formContainer}>
    <View style={constants.h1_view}>
    <Text style={constants.h1_text}>My Remixes</Text>
    </View>
    <FlatList 
      data= {DUMMY_DATA}
      keyExtractor={item => item.id}
      renderItem = {renderItem}
      />
    </View>
    </View>
    </SafeAreaView>
  )
}

export default RemixesScreen;
