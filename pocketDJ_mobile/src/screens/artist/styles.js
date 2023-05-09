import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
 
const styles = StyleSheet.create({
  artist:{
    alignItems:'center',
    marginBottom:20,
    marginTop:20
  },
  artist_image:{
    height:350,
    width:350,
    justifyContent:"flex-end",
  },
  artist_item_name:{
    color:Colors.white,
    fontSize:25,
    backgroundColor:Colors.black,
    padding:10,
    borderRadius: 10

    
  },
  artist_name:{
    borderRadius: 10
  }
})

export default styles;