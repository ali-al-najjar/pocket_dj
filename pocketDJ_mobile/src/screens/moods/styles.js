import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';


const styles = StyleSheet.create({
  
topSafeArea: {
  flex: 0, 
  backgroundColor: Colors.primaryColor,
  marginBottom:10
},
  imageContainer:{
    backgroundColor:Colors.primaryColor,
  },
  innerImageContainer:{
    backgroundColor:Colors.primaryColor,
    marginLeft:'auto',
    marginRight:'auto',
    height:250,
    width:350
  },
  flatlist:{
    flex:1

  },
  h1_view:{
    margin:10,
    borderBottomWidth :6,
    borderBottomColor: Colors.secondaryColor,
  },
  h1_text:{
    fontSize:24,
    color:Colors.black,
    fontWeight:'bold',
    paddingBottom:10
  }
});

export default styles;