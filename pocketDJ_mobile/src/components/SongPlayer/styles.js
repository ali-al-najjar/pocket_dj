import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  audio_player:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:40,
  },
  audioScreenContainer:{
    alignItems:'center',
  },
  progressBar:{
    flexDirection:'row',
    width:360
  },
  progressBarCounter:{
    flexDirection:'row',
    width:315,
    justifyContent:'space-between'
  }
});

export default styles;