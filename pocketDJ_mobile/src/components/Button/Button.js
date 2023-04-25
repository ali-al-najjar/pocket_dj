import { Text, TouchableOpacity, View } from "react-native"
import styles from "./styles";
import constants from '../../constants/styles';


const Button = ({title, onPress}) => {

  return (
    <TouchableOpacity style={constants.btn} onPress={onPress}>
    <Text style={constants.btn_text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button;