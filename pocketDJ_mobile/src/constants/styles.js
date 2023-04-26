import { StyleSheet } from 'react-native';


const primaryColor = '#FC6422';
const secondaryColor = '#87F966';
const tertiaryColor = '#FC1CFD';
const textColor = '#000000';
const white ='white';
const black = '#1E1E1E';

const styles = StyleSheet.create({
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
    borderBottomWidth :6,
    borderBottomColor: secondaryColor,
    width:'auto'

  },
  h1_text:{
    fontSize:24,
    color:black,
    fontWeight:'bold',
    paddingBottom:10,
    width:'90%'
    
  },
    btn: {
    backgroundColor: primaryColor,
    width:'100%',
    padding:10,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },
  btn_text:{
    color: white,
    fontSize:24
  },
  textInput: {
    borderRadius: 10,
    borderWidth:1, 
    padding:10,
  },
  formContainer: {
    flex:1,
    gap:20,
    marginBottom:20
  },
  innerContainer: {
    flex:1,
    gap:10,
    width:'90%',
    marginLeft:'auto',
    marginRight:'auto'
  },
  links: {
    color: primaryColor,
    fontWeight: 'bold',
  },
  links_text:{
    color: white
  },
  error:{
    color:'red'
  },
  error_container:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  }
})

export default styles;