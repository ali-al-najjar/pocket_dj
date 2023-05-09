import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
 
const styles = StyleSheet.create({
  artist_image:{
    height:300,
    justifyContent:"flex-end",
  },
  artist_item_name:{
    color:Colors.white,
    fontSize:25,
    backgroundColor:Colors.black,
    padding:10,
  }
})

export default styles;