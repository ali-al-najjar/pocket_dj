import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
 
const styles = StyleSheet.create({
profileContainer:{
 gap:20,
 justifyContent:'center',
 margin:20
},
imageStyle:{
  width: 200,
  height: 200 ,
  borderRadius:10,
},
updateInputs:{
  gap:10
},
imageUpload:{
  alignItems:'center',
  flexDirection:'row',
  gap:5
},
messageText:{
  color:Colors.primaryColor,
  fontWeight:'bold'
},
cancelButton:{
  width:'20%',
  fontSize:"12px"
}


})

export default styles;