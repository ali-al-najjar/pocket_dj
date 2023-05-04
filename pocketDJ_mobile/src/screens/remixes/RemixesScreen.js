import { View, Text, TextInput, TouchableOpacity, Image, FlatList,RefreshControl} from "react-native";
import styles from './styles';
import constants from '../../constants/styles';
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import { DUMMY_DATA } from "../../../data/remixes";
import RemixItem from "../../components/Remix/RemixItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

const renderItem = ({item}) => {
  console.log("Rendering item with ID:", item.id);
  return <RemixItem id={item.id} title={item.title} mood={item.mood} date={item.date} />}

const RemixesScreen = () => {
  const navigation = useNavigation();
  const header = () =>{
    return (
    <View>
    <View style={styles.h1_view}>
    <Text style={styles.h1_text}>My Remixes</Text>
    </View>
    </View>
    )
  }
  return(
    <>
    <SafeAreaView style={{ flex: 1, marginBottom: 0 }} edges={[]}>
    <FlatList 
      ListHeaderComponent ={header}
      data= {DUMMY_DATA}
      keyExtractor={item => item.id}
      renderItem = {renderItem}
      />
    </SafeAreaView>
    </>
  )
}

export default RemixesScreen;
