import { StyleSheet } from 'react-native';

const primaryColor = '#FC6422';
const rgbaPrimary = 'rgba(252, 100, 34, 0.75)'
const secondaryColor = '#87F966';
const tertiaryColor = '#FC1CFD';
const textColor = '#000000';
const white ='white';
const black = '#1E1E1E';

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
    color:white,
    fontSize:20,
    backgroundColor:rgbaPrimary,
    padding:10,
    width:120,
    textAlign:'center'
  }
});

export default styles;
