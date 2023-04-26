import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';


const styles = StyleSheet.create({
  play_icon:{
    backgroundColor:Colors.black,
    borderRadius:50,
    width:60,
    height:60,
    alignItems:'center',
    justifyContent:'center'
  },
  remixContainer:{
    padding:20,
    backgroundColor:Colors.primaryColor,
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
    color:Colors.white,
  },
  remixMood:{
    fontSize:15,
    fontWeight:'bold',
    color:Colors.white
  },
  remixDate:{
    fontSize:12,
    fontStyle:'italic',
    color:Colors.black,
    fontWeight:'bold'
  }




})

export default styles