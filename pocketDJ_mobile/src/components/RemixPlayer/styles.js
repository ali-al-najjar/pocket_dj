import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  audio_player:{
    flexDirection:'row',
    alignItems:'center',
    gap:40
  },
  audioScreenContainer:{
    alignItems:'center'
  },
  progressBar:{
    flexDirection:'row',
    width:360
  },
  progressBarCounter:{
    flexDirection:'row',
    width:360,
    justifyContent:'space-between'
  }
});

export default styles;