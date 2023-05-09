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
import { useSelector } from 'react-redux';

const renderItem = ({item}) => {
  return <RemixItem id={item.id} title={item.name} date={item.date} mood={item.mood_name} audio={item.link} cover={item.cover} duration={parseFloat(item.duration)}/>}

const RemixesScreen = () => {
  const navigation = useNavigation();
  const token = useSelector(state => state.token.token);
  const user= useSelector(state =>state.user)
  const user_id = user.id
  const [responses, setResponses] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      getRemixes();
    }, 1000);
  }, []);

  const getRemixes = async () => {
    console.log(token)
    console.log(user_id)
      await axios.get(`http://192.168.1.127:8000/remixes/?user_id=${user_id}`,{
        headers: { 'Authorization': `Token ${token}`,
      }
      })
      .then((res)=>{
        setResponses(res.data);
      }).catch((err)=>{
      console.log(err.request)});
      
    }
    
  useEffect(() => {
    getRemixes();
    console.log(responses)
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
      keyExtractor={(item,index)=> index}
      renderItem = {renderItem}
      />
    </>
  )
}

export default RemixesScreen;
