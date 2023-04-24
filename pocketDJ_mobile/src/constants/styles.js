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

  btn: {
    backgroundColor: primaryColor,
    width:132,
    height:46,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },
  btn_text:{
    color: white
  },
  textInput: {
    borderRadius: 10,
    borderWidth:1, 
    padding:10,
  },
  h1_view: {
    borderBottomWidth :2,
    borderBottomColor: secondaryColor,
    marginTop:10,
    width:'80%',
    marginTop:20,
    marginBottom:10
  },
  h1_text:{
    fontSize:24,
    color:black,
    fontWeight:'bold',
    paddingBottom:10
  },
    btn: {
    backgroundColor: primaryColor,
    width:132,
    height:46,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },
  btn_text:{
    color: white
  },
  textInput: {
    borderRadius: 10,
    borderWidth:1, 
    padding:10,
  },
  formContainer: {
    width:'90%',
    marginLeft:'auto',
    marginRight:'auto',
    gap:10,
    marginTop:20
  },
  links: {
    color: primaryColor,
    fontWeight: 'bold',
  },
  links_text:{
    color: white
  }
})

export default styles;