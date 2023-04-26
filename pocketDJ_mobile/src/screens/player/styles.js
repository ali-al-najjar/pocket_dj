import { StyleSheet } from 'react-native';

const primaryColor = '#FC6422';
const secondaryColor = '#87F966';
const tertiaryColor = '#FC1CFD';
const textColor = '#000000';
const white ='white';
const black = '#1E1E1E';
const rgbaPrimary = 'rgba(252, 100, 34, 0.75)'

const styles = StyleSheet.create({
  container:{
    flex:1,
    gap:40
  },
  mood_title:{
    alignItems:'center',
    borderWidth:2,
    width:'80%',
    borderColor:rgbaPrimary,
    padding:15,
    marginLeft:'auto',
    marginRight:'auto',
    borderRadius:10
  },
  mood_title_text:{
    fontSize:25,
    color:primaryColor
  }

});

export default styles;