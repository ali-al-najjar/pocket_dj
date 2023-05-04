import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
 
const styles = StyleSheet.create({
profileContainer:{
 gap:10,
 justifyContent:'center',
},
imageStyle:{
  width: 200,
  height: 200 ,
  borderRadius:10,
},
updateInputs:{
  gap:10,
  margin:10
},
imageUpload:{
  alignItems:'center',
  flexDirection:'row',
  gap:5,
  margin:10
},
messageText:{
  color:Colors.primaryColor,
  fontWeight:'bold'
},
cancelButton:{
  width:'20px',
  fontSize:12
},
uploadContainer:{
  gap:20,
  margin:10
},
header:{
  width:'90%',
  marginLeft:'2%'
}


})

export default styles;