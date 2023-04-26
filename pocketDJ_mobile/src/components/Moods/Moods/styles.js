import { StyleSheet } from 'react-native';
import Colors from '../../../constants/colors';

const styles = StyleSheet.create({
  mood: {
    flex:1,
    height:185,
    width:185,
    margin:10,
    justifyContent:'center',
    alignItems:'center',
  },
  mood_text:{
    color:Colors.white,
    fontSize:20,
    backgroundColor:Colors.rgbaPrimary,
    padding:10,
    width:120,
    textAlign:'center'
  }
});

export default styles;
