import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  registerContainer:{
    flex:1,
    marginTop:-20
},
uploadImageButton:{
  flex:1,
  backgroundColor:Colors.secondaryColor,
  flexDirection:'row',
  justifyContent:'center'
},
imageStyle:{
  width: 200,
  height: 200 ,
  borderRadius:10
}
})

export default styles;