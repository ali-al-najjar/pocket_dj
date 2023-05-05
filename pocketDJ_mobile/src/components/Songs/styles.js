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
    backgroundColor:Colors.rgbaPrimary,
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
    backgroundColor:Colors.rgbaPrimary,
    padding:10,
    marginBottom:10,
    width:"85%",
  },
});

export default styles;
