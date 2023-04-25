import { StyleSheet } from 'react-native';

const primaryColor = '#FC6422';
const secondaryColor = '#87F966';
const tertiaryColor = '#FC1CFD';
const textColor = '#000000';
const white ='white';
const black = '#1E1E1E';

const styles = StyleSheet.create({
  mood: {
    height:100,
    width:150,
    borderRadius:10,
    backgroundColor:black,
    margin:5,
    justifyContent:'center',
    alignItems:'center',
  },
  mood_text:{
    color:white
  }
});

export default styles;
