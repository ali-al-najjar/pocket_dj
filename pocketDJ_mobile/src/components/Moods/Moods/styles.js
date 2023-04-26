import { StyleSheet } from 'react-native';

const primaryColor = '#FC6422';
const secondaryColor = '#87F966';
const tertiaryColor = '#FC1CFD';
const textColor = '#000000';
const white ='white';
const black = '#1E1E1E';

const styles = StyleSheet.create({
  mood: {
    flex:1,
    height:100,
    width:180,
    borderRadius:10,
    backgroundColor:black,
    margin:10,
    justifyContent:'center',
    alignItems:'center',
  },
  mood_text:{
    color:white,
    fontSize:20
  }
});

export default styles;
