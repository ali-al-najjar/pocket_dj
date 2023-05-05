import { View, Text,Image, FlatList, ScrollView} from "react-native";
import styles from './styles';
import {useState, useEffect} from 'react';
import { useNavigation } from "@react-navigation/native";
import MoodItem from "../../components/Moods/Moods/MoodItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { getToken } from "../../auth/auth";
import axios from 'axios';

const renderSong = ({item}) => {
  console.log("Rendering item with ID:", item.image);
  return <MoodItem id={item.id} name={item.name} cover={item.cover} />
}
const renderArtist = ({item}) => {
  console.log("Rendering item with ID:", item.image);
  return <MoodItem id={item.id} name={item.first_name +" " + item.last_name}  cover={item.profile} />
}

const SearchScreen = () => {
  const navigation = useNavigation();
  const token = getToken();
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);

  const getSongs = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'http://192.168.1.127:8000/songs',
        headers: {
          Authorization: 'Token ' + token,
        },
      });
      setSongs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getArtists = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'http://192.168.1.127:8000/artists',
        headers: {
          Authorization: 'Token ' + token,
        },
      });
      setArtists(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getArtists();
    getSongs();
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
    <ScrollView>
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
    data= {artists}
    keyExtractor={item => item.id}
    renderItem = {renderArtist}
    horizontal
    />
    <FlatList 
      style={styles.flatlist}
      data= {songs}
      keyExtractor={item => item.id}
      renderItem = {renderSong}
      horizontal
      />
      </ScrollView>
  )
}

export default SearchScreen;
