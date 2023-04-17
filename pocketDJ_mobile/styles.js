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
  }
});

export default styles;
