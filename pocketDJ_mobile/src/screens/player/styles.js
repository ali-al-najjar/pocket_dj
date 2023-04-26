import { StyleSheet } from 'react-native';

const primaryColor = '#FC6422';
const secondaryColor = '#87F966';
const tertiaryColor = '#FC1CFD';
const textColor = '#000000';
const white ='white';
const black = '#1E1E1E';

const styles = StyleSheet.create({
  container:{
    flex:1,
    gap:30
  },
  mood_title:{
    alignItems:'center',
    borderWidth:2,
    width:'80%',
    borderColor:primaryColor,
    padding:20,
    marginLeft:'auto',
    marginRight:'auto',
    borderRadius:10
  },
  mood_title_text:{
    fontSize:24,
    color:primaryColor
  }

});

export default styles;