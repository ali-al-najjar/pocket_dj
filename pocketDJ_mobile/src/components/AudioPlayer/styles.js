import { StyleSheet } from 'react-native';

const primaryColor = '#FC6422';
const secondaryColor = '#87F966';
const tertiaryColor = '#FC1CFD';
const textColor = '#000000';
const white ='white';
const black = '#1E1E1E';

const styles = StyleSheet.create({
  audio_player:{
    flexDirection:'row',
    alignItems:'center',
    gap:40
  },
  audioScreenContainer:{
    alignItems:'center',
    gap:20
  },
  container:{
    width:"80%",
    gap:20,
    alignItems:'center',
    justifyContent:'center'
  }
});

export default styles;