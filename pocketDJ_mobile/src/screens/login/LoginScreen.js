import { View, Text, TextInput, TouchableOpacity, Image} from "react-native";
import styles from './styles';
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import constants from '../../constants/styles';

const LoginScreen = () => {
  const navigation = useNavigation();
  
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")


  return(
    <View>
      <Image 
    source={require('../../../assets/mixer.png')}
    style={styles.mixer}
    />
    <View style={constants.formContainer}>
      <View style={constants.h1_view}>
      <Text style={constants.h1_text}>Login to your account</Text>
      </View>
      <Text>Email Address</Text>
      <TextInput style={constants.textInput}
        defaultValue={email}
        onChangeText={email=>{setEmail(email)}}
        />
      <Text>Password</Text>
      <TextInput style={constants.textInput}
        defaultValue={password}
        onChangeText={pwd=>{setPassword(password)}}
        />
        <TouchableOpacity style={constants.btn} onPress={() => navigation.navigate('Pick your mood')}>
        <Text style={constants.btn_text}>Log in</Text>
        </TouchableOpacity>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={constants.links}>Register Now</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default LoginScreen;