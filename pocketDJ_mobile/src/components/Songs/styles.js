import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  song_item: {
    flex:1,
    height:185,
    width:185,
    margin:10,
    justifyContent:"flex-end",
  },
  song_item_name:{
    color:Colors.white,
    fontSize:15,
    backgroundColor:Colors.primaryColor,
    padding:10,
    marginBottom:10,
    width:"85%",
  },
  latest_song_item: {
    flex:1,
    height:300,
    width:390,
    margin:10,
    justifyContent:"flex-end",
  },
  latest_song_item_name:{
    color:Colors.white,
    fontSize:15,
    backgroundColor:Colors.primaryColor,
    padding:10,
    width:'150%',
  },
  latest_artist_name:{
    color:Colors.white,
    fontSize:20,
    backgroundColor:Colors.black,
    padding:10,
    width:'150%'

  },
  latest_song:{
    color:Colors.white,
    fontSize:20,
    padding:10,
    backgroundColor:Colors.black,
    fontWeight:'bold',
    width:'150%'
  },
  typewriter:{
    padding:10,
  },
  latest_items:{
  }
});

export default styles;
