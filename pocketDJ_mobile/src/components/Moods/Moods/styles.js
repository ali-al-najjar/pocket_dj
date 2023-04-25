import { StyleSheet } from 'react-native';

const primaryColor = '#FC6422';
const secondaryColor = '#87F966';
const tertiaryColor = '#FC1CFD';
const textColor = '#000000';
const white ='white';
const black = '#1E1E1E';

const styles = StyleSheet.create({
  mood: {
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:black,
    padding:20,
    margin:5,
    width:'80%',
    marginLeft:'auto',
    marginRight:'auto',
    
  },
  mood_text:{
    color:white
  }
});

export default styles;
