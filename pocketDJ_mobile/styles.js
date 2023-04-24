import { StyleSheet } from 'react-native';


const primaryColor = '#FC6422';
const secondaryColor = '#87F966';
const tertiaryColor = '#FC1CFD';
const textColor = '#000000';
const white ='white';


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
  textInput: {
    borderRadius: 10,
    borderWidth:1, 
    padding:10,
  },
  loginContainer: {
    width:'90%',
    marginLeft:'auto',
    marginRight:'auto',
    gap:10
  },
  links: {
    color: primaryColor,
    fontWeight: 'bold'
  },
  mood: {
    padding:40,
    borderRadius:10,
    backgroundColor:primaryColor,
    marginVertical:10,
    marginHorizontal:10,
    justifyContent:'center',
    alignItems:'center'
  },
  header: {
    borderBottomColor:secondaryColor,
    borderBottomWidth:1
  },
  mixer:{
    height:280,
    width:370,
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:10,
    marginBottom:20,

  }
});

export default styles;
