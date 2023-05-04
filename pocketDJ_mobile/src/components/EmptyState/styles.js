import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    width: '100%',
    paddingHorizontal: 45,
    fontSize: 22,
    marginBottom: 12,
    textAlign: 'center',
    fontWeight: 'bold',
},
description: {
  width: '100%',
  paddingHorizontal: 45,
  fontSize: 16,
  lineHeight: 22,
  textAlign: 'center',
}
})

export default styles;