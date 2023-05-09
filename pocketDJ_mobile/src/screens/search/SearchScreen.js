import { React,View, Text,Image, FlatList, ScrollView,RefreshControl,TextInput,ActivityIndicator} from "react-native";
import styles from './styles';
import {useState, useEffect,useCallback} from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { getToken } from "../../auth/auth";
import axios from 'axios';
import ArtistItem from "../../components/Artists/ArtistItem";
import SongItem from "../../components/Songs/SongItem";
import LatestSongItem from "../../components/Songs/LatestSongItem";

const renderSong = ({item}) => {
  return (
    <SongItem id={item.id} name={item.name} cover={item.cover} audio={item.link} duration={parseFloat(item.duration)}/>
  
)}
const renderArtist = ({item}) => {
  return <ArtistItem id={item.id} name={item.first_name +" " + item.last_name}  cover={item.profile} songs={item.songs} />
}
const token = getToken();

const SearchScreen = () => {
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [latest_song, setLatestSong] = useState();
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const handleSearch = (text) => {
    setSearch(text);
  };

  useEffect(()=>{
    getSongs();
    getArtists();
  },[])

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setSearch("")
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
          Authorization: 'Token ' + token._j,
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
          Authorization: 'Token ' + token._j,
        },
      });
      setArtists(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(token)
    const getSearch = async () => {
      if (search ==""){
        getSongs();
        getArtists();
      }
      try {
        const res = await axios({
          method: 'GET',
          url: `http://192.168.1.127:8000/search?q=${search}`,

        });
        setSearchResult(res.data);
        setSongs(res.data.songs)
        setArtists(res.data.artists);
      } catch (err) {
        console.log(err);
      }
    };
    
    getSearch();
  }, [search]);
  
  useEffect(()=>{
    if (songs.length > 0){
      const last_item = songs[songs.length-1]
      setLatestSong({id: last_item.id ,name: last_item.name, cover:last_item.cover , artist_name: last_item.artist_name+ ' ' +last_item.artist_last_name, audio: last_item.link, duration:last_item.duration})
    }
  },[songs])


  return(
    <ScrollView 
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <View style={styles.searchContainer}>
      <View style={styles.search}>
      <TextInput
        placeholder="Search"
        value={search}
        onChangeText={(text)=>{setSearch(text)}}
      />
      </View>
      </View>
      {latest_song && <LatestSongItem id={latest_song.id} Name={latest_song.name} Cover={latest_song.cover} ArtistName={latest_song.artist_name} Audio={latest_song.audio} Duration={parseFloat(latest_song.duration)}/>}
      <View style={styles.h1_view}>
      <Text style={styles.h1_text}>Our Artists</Text>
      </View>
    <FlatList 
    style={styles.flatlist}
    data= {artists}
    keyExtractor={item => item.id}
    renderItem = {renderArtist}
    horizontal
    showsHorizontalScrollIndicator={false}
    />
    <View style={styles.h1_view}>
    <Text style={styles.h1_text}>Our Songs</Text>
    </View>
    <FlatList 
      style={styles.flatlist}
      data= {songs}
      keyExtractor={item => item.id}
      renderItem = {renderSong}
      horizontal
      showsHorizontalScrollIndicator={false}
      />

      </ScrollView>
      
  )
}

export default SearchScreen;
