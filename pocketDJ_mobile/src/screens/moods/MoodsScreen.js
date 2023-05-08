import { View, Text,Image, FlatList,RefreshControl} from "react-native";
import styles from './styles';
import {useState, useEffect,useCallback} from 'react';
import { useNavigation } from "@react-navigation/native";
import MoodItem from "../../components/Moods/Moods/MoodItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { getToken } from "../../auth/auth";
import axios from 'axios';

const renderItem = ({item}) => {
  return <MoodItem id={item.id} name={item.name} cover={item.cover} />
}

const MoodsScreen = () => {
  const navigation = useNavigation();
  const token = getToken();
  const [refreshing, setRefreshing] = useState(false);
  const [responses, setResponses] = useState([]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      getMoods();
    }, 1000);
  }, []);

  const getMoods = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'http://192.168.1.127:8000/moods',
        headers: {
          Authorization: 'Token ' + token,
        },
      });
      setResponses(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMoods();
  }, []);
  
  const header = () =>{
    return (
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
      </>
    )
  }
  return(
    <FlatList 
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      ListHeaderComponent ={header}
      style={styles.flatlist}
      data= {responses}
      keyExtractor={item => item.id}
      renderItem = {renderItem}
      numColumns={2}
      />
  )
}

export default MoodsScreen;
