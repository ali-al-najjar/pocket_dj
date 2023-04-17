import { StyleSheet } from 'react-native';


const primaryColor = '#FC6422';
const secondaryColor = '#87F966';
const tertiaryColor = '#FC1CFD';
const textColor = '#000000';
const white ='white';


const styles = StyleSheet.create({
  pinkContainer: {
    backgroundColor: white,
    height:1600,
    padding:20,
  },

  btn: {
    backgroundColor: secondaryColor,
    width:132,
    height:46,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },
  textInput: {
    borderRadius: 10,
    borderWidth:1, 
    padding:10,
  },
  loginContainer: {
    width:'80%',
    marginLeft:'auto',
    marginRight:'auto',
  },
  links: {
    color: tertiaryColor,
  },
  mood: {
    padding:40,
    borderRadius:10,
    backgroundColor:primaryColor,
    marginVertical:10,
    marginHorizontal:10,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default styles;
