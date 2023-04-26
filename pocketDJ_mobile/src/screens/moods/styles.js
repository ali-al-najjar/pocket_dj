import { StyleSheet } from 'react-native';

const primaryColor = '#FC6422';
const secondaryColor = '#87F966';
const tertiaryColor = '#FC1CFD';
const textColor = '#000000';
const white ='white';
const black = '#1E1E1E';

const styles = StyleSheet.create({
  
topSafeArea: {
  flex: 0, 
  backgroundColor: primaryColor,
  marginBottom:20
},
  imageContainer:{
    backgroundColor:primaryColor,
  },
  innerImageContainer:{
    backgroundColor:primaryColor,
    marginLeft:'auto',
    marginRight:'auto',
    height:250,
    width:350
  },
  flatlist:{
    flex:1,


  }
});

export default styles;