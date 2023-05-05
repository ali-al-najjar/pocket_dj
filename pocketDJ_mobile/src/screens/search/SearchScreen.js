import { React,View, Text,Image, FlatList, ScrollView,RefreshControl,TextInput,StatusBar} from "react-native";
import styles from './styles';
import constants from '../../constants/styles';
import {useState, useEffect,useCallback} from 'react';
import { useNavigation } from "@react-navigation/native";
import MoodItem from "../../components/Moods/Moods/MoodItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { getToken } from "../../auth/auth";
import axios from 'axios';

const renderSong = ({item}) => {
  return <MoodItem id={item.id} name={item.name} cover={item.cover} />
}
const renderArtist = ({item}) => {
  return <MoodItem id={item.id} name={item.first_name +" " + item.last_name}  cover={item.profile} />
}

const SearchScreen = () => {
  const navigation = useNavigation();
  const token = getToken();
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [latest_song, setLatestSong] = useState({
    name:"",
    cover:""
  })
  const [search, setSearch] = useState('');


  const handleSearch = (text) => {
    setSearch(text);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      getArtists();
      getSongs();
    }, 1000);
  }, []);

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
      setLatestSong({name: res.data[0].name, cover:res.data[0].cover} )
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

  // useEffect(() => {
  //   getArtists();
  //   getSongs();
  // }, []);

  useEffect(() => {
    const getSearch = async () => {
      try {
        const res = await axios({
          method: 'GET',
          url: `http://192.168.1.127:8000/search?q=${search}`,
          headers: {
            Authorization: 'Token ' + token,
          },
        });
        setSearch(res.data);
        setSongs(res.data.songs)
        setArtists(res.data.artists);
      } catch (err) {
        console.log(err);
      }
    };
    getSearch();
  }, [search]);
  
  return(
    <ScrollView
    stickyHeaderIndices={[0]}
    contentcontainerstyles = {styles.contentContainer}
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />    
    <SafeAreaView>

      <View style={styles.search}>
      <View>
      <TextInput
        placeholder="Search"
        value={search}
        onChangeText={handleSearch}
      />
      </View>
      </View>
      <Text>{latest_song.name}</Text>
      <Image 
        source={{uri:latest_song.cover}}
        style={styles.songImageContainer}
      />
      <View style={styles.h1_view}>
      <Text style={styles.h1_text}>What are you up to?</Text>
      </View>
    <FlatList 
    style={styles.flatlist}
    data= {artists}
    keyExtractor={item => item.id}
    renderItem = {renderArtist}
    horizontal
    showsHorizontalScrollIndicator={false}
    />
    <FlatList 
      style={styles.flatlist}
      data= {songs}
      keyExtractor={item => item.id}
      renderItem = {renderSong}
      horizontal
      showsHorizontalScrollIndicator={false}
      />
      </SafeAreaView>
      </ScrollView>
      
      
      
  )
}

export default SearchScreen;
