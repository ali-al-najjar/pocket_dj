import { StyleSheet } from 'react-native';

const primaryColor = '#FC6422';
const secondaryColor = '#87F966';
const tertiaryColor = '#FC1CFD';
const textColor = '#000000';
const white ='white';
const black = '#1E1E1E';

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    height:1600,
    padding:20,
  },
  moods_list:{
    width:'100%'
  },
  mood: {
    padding:40,
    borderRadius:10,
    backgroundColor:primaryColor,
    marginVertical:10,
    marginHorizontal:10,
    justifyContent:'center',
    alignItems:'center',
    flex:1
  },
  mood_text:{
    color:white,
  }
});

export default styles;
