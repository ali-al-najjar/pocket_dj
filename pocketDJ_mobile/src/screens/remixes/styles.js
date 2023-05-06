import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
 
const styles = StyleSheet.create({
  remixesContainer: {
    flex:1,
    gap:30,
    marginTop:10,
  },
  h1_view: {
    borderBottomWidth :6,
    borderBottomColor: Colors.secondaryColor,
    width:'90%',
    marginLeft:10,
    marginTop:10

  },
  h1_text:{
    fontSize:24,
    color:Colors.black,
    fontWeight:'bold',
    paddingBottom:10,
  },
  flatList:{
    
  }
})

export default styles;