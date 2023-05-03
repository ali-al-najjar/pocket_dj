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
}
})

export default styles;