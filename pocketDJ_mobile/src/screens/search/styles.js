import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';


const styles = StyleSheet.create({
  searchContainer: {
    justifyContent:'center',
    alignItems:'center',
    padding:10
  },
  songImageContainer:{
    height:300,
    width:"100%"
  },
  search:{
      borderRadius: 10,
      borderWidth:1, 
      padding:10,
      marginTop:10,
      width:'90%'
  }
});

export default styles;