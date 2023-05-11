import { ImageBackground,View, Text,FlatList} from "react-native";
import styles from './styles';
import { useNavigation } from "@react-navigation/native";
import EmptyState from "../../components/EmptyState/emptyState";
import { useRoute } from '@react-navigation/native';
import {useState,useEffect} from 'react';
import SongItem from "../../components/Songs/SongItem";

const renderSong = ({item}) => {
  return (
    <SongItem id={item.id} name={item.name} cover={item.cover} audio={item.link} duration={parseFloat(item.duration)}/>
  
)}

const ArtistScreen = () => {
  const [ArtistTitle, setArtistTitle] = useState('');
  const [ArtistImage, setArtistImage] = useState('');
  const route = useRoute();
  const { title, image, songs } = route.params;


  useEffect(() => {
    setArtistTitle(title);
    setArtistImage(image);
    console.log(songs);
    }, []);

  const navigation = useNavigation();
  const header = () =>{
    return (
      <View style= {styles.artist}>
      <ImageBackground 
      source={{ uri: ArtistImage.uri }}
      imageStyle={{ borderRadius: 10}}
      style = {styles.artist_image}>
      <View style={styles.artist_name}>
      <Text style={styles.artist_item_name}>{ArtistTitle}</Text>
      </View>
      </ImageBackground>
      </View>
    )
  }
  return(
    <>
    <FlatList 
      style={styles.flatList}
      ListHeaderComponent ={header}
      data= {songs}
      keyExtractor={item => item.id}
      renderItem = {renderSong}
      numColumns={2}
      ListEmptyComponent={
        <EmptyState     
          title={"Coming Soon!"}
          description={"Artist's songs will be uploaded soon"}
          buttonName={"Go Back"}
          onPress={()=> {
            navigation.navigate("Search");}}
        />}
      />
    </>
  )
}

export default ArtistScreen;
