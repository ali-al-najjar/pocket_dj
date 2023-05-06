import { ImageBackground,View, Text,FlatList} from "react-native";
import styles from './styles';
import { useNavigation } from "@react-navigation/native";
import RemixItem from "../../components/Remix/RemixItem";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyState from "../../components/EmptyState/emptyState";
import { useRoute } from '@react-navigation/native';
import {useState,useEffect} from 'react';


const renderItem = ({item}) => {
  return <RemixItem id={item.id} title={item.name}/>}

const SongsScreen = () => {
  const [ArtistTitle, setArtistTitle] = useState('');
  const [ArtistImage, setArtistImage] = useState('');
  const [ArtistSongs, setArtistSongs] = useState([]);
  const route = useRoute();
  const { title, image, songs } = route.params;


  useEffect(() => {
    setArtistTitle(title);
    setArtistImage(image);
    setArtistSongs(songs);
    }, []);

  const navigation = useNavigation();
  const header = () =>{
    return (
      <ImageBackground 
      source={{ uri: ArtistImage.uri }}
      style = {styles.artist_image}>
      <Text style={styles.artist_item_name}>{ArtistTitle}</Text>
      </ImageBackground>
    )
  }
  return(
    <>
    <SafeAreaView style={{ flex: 1, marginBottom: 0 }} edges={[]}>
    <FlatList 
      style={styles.flatList}
      ListHeaderComponent ={header}
      data= {ArtistSongs}
      keyExtractor={item => item.id}
      renderItem = {renderItem}
      ListEmptyComponent={
        <EmptyState     
          title={"Coming Soon!"}
          description={"Artist's songs will be uploaded soon"}
          buttonName={"Go Back"}
          onPress={()=> {
            navigation.navigate("Search");}}
        />}
      />
    </SafeAreaView>
    </>
  )
}

export default SongsScreen;
