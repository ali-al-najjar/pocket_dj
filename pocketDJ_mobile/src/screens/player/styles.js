import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';


const styles = StyleSheet.create({
  container:{
    flex:1,
    gap:30,
  },
  mood_title:{
    alignItems:'center',
    borderWidth:2,
    width:'80%',
    borderColor:Colors.rgbaPrimary,
    padding:10,
    marginLeft:'auto',
    marginRight:'auto',
    borderRadius:10
  },
  mood_title_text:{
    fontSize:25,
    color:Colors.primaryColor
  },
  imageStyle:{
    height:350,
    width:350,
    marginLeft:'auto',
    marginRight:'auto',
    borderRadius:10
  },
  cover_container:{
    height:350,
    width:350,
    marginLeft:'auto',
    marginRight:'auto',
    borderRadius:10,
    backgroundColor:Colors.black,
    elevation: 5,
    shadowColor: Colors.black,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    marginTop:-20}

});

export default styles;