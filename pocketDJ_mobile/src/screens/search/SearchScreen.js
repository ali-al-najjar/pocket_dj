import { React,View, Text,Image, FlatList, ScrollView,RefreshControl,TextInput} from "react-native";
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

const SearchScreen = () => {
  const token = getToken();
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [last_item , setLastItem] = useState([])
  const [latest_song, setLatestSong] = useState({
    name:"",
    cover:"",
    artist_name:"",
    audio:""
  })
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = (text) => {
    setSearch(text);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setSearch("")
      setRefreshing(false);
      getArtists();
      getSongs();
      setLastItem();
      setLatestSong();
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
      console.log(songs)
      setLastItem(songs[songs.length-1])
      setLatestSong({name: last_item.name, cover:last_item.cover ,artist_name: last_item.artist_name+ ' ' +last_item.artist_last_name,audio: last_item.link})
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
      <LatestSongItem id={latest_song.id} Name={latest_song.name} Cover={latest_song.cover} ArtistName={latest_song.artist_name} audio={latest_song.audio}/>
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
