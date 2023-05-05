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
  },
  h1_view:{
    margin:10,
    paddingBottom:5,
    borderBottomWidth:5,
    borderBottomColor:Colors.secondaryColor,
    width:'40%'
  },
  h1_text:{
    fontSize:24,
    fontWeight:'bold'
  }
});

export default styles;