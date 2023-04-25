import { StyleSheet } from 'react-native';


const primaryColor = '#FC6422';
const secondaryColor = '#87F966';
const tertiaryColor = '#FC1CFD';
const textColor = '#000000';
const white ='white';
const black = '#1E1E1E';

const styles = StyleSheet.create({
  play_icon:{
    backgroundColor:black,
    borderRadius:50,
    width:70,
    height:70,
    alignItems:'center',
    justifyContent:'center'
  },
  remixContainer:{
    padding:20,
    backgroundColor:primaryColor,
    margin:10,
    borderRadius:15,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  remixInfo:{
    gap:5
  },
  remixTitle:{
    fontWeight:'bold',
    fontSize:25,
    color:white,
  },
  remixMood:{
    fontSize:15,
    fontWeight:'bold'
  },
  remixDate:{
    fontSize:13,
    fontStyle:'italic',
    color:white
  }




})

export default styles