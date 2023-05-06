import { View, Text,FlatList,RefreshControl} from "react-native";
import styles from './styles';
import { useNavigation } from "@react-navigation/native";
import { DUMMY_DATA } from "../../../data/remixes";
import RemixItem from "../../components/Remix/RemixItem";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyState from "../../components/EmptyState/emptyState";
import { getToken } from "../../auth/auth";
import axios from 'axios';
import {useState, useEffect,useCallback} from 'react';

const renderItem = ({item}) => {
  return <RemixItem id={item.id} title={item.name} date={item.date} />}

const RemixesScreen = () => {
  const navigation = useNavigation();
  
  const [responses, setResponses] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [token, setToken] = useState(getToken())

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      getRemixes();
    }, 1000);
  }, []);

  const getRemixes = async () => {
    console.log(token._j)
    try {
      const res = await axios({
        method: 'GET',
        url: 'http://192.168.1.127:8000/remixes',
        headers: {
          Authorization: 'Token ' + token._j,
        },
      });
      setResponses(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
      
    }
  };

  useEffect(() => {
    getRemixes();
  }, []);

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
    <FlatList 
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      style={styles.flatList}
      ListHeaderComponent ={header}
      ListEmptyComponent={
      <EmptyState     
        title={"No Remixes Created!"}
        description={"This page will show all your saved remixes"}
        buttonName={"Create"}
        onPress={()=> {
          navigation.navigate("Create");}}
      />}
      data= {responses}
      keyExtractor={item => item.id}
      renderItem = {renderItem}
      />
    </>
  )
}

export default RemixesScreen;
