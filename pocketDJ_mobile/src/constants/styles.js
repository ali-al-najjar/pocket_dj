import { StyleSheet } from 'react-native';
import Colors from './colors';
 
const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primaryColor,
    width:132,
    height:46,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },
  btn_text:{
    color: Colors.white
  },
  textInput: {
    borderRadius: 10,
    borderWidth:1, 
    padding:10,
  },
  h1_view: {
    borderBottomWidth :6,
    borderBottomColor: Colors.secondaryColor,
    width:'auto'

  },
  h1_text:{
    fontSize:24,
    color:Colors.black,
    fontWeight:'bold',
    paddingBottom:10,
    width:'90%'
    
  },
    btn: {
    backgroundColor: Colors.primaryColor,
    width:'100%',
    padding:10,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },
  btn_text:{
    color: Colors.white,
    fontSize:24
  },
  textInput: {
    borderRadius: 10,
    borderWidth:1, 
    padding:10,
  },
  formContainer: {
    flex:1,
    gap:30,
    marginBottom:20,
    marginTop:10
  },
  innerContainer: {
    flex:1,
    gap:15,
    width:'90%',
    marginLeft:'auto',
    marginRight:'auto'
  },
  linksSection: {
    flexDirection:'row',
  },
  links: {
    color: Colors.primaryColor,
    fontWeight: 'bold',
  },
  links_text:{
    color: Colors.white
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