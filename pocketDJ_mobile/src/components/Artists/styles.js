import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  artist_item: {
    flex:1,
    height:185,
    width:185,
    margin:10,
    justifyContent:"flex-end",
  },
  artist_item_name:{
    color:Colors.white,
    fontSize:15,
    backgroundColor:Colors.black,
    padding:10,
    marginBottom:10,
    width:"85%",
  }
});

export default styles;
