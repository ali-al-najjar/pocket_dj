import { View, Text, TextInput, TouchableOpacity, Image, StatusBar} from "react-native";
import styles from './styles';
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import constants from '../../constants/styles';
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button/Button";

const LoginScreen = () => {
  const navigation = useNavigation();
  
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")


  return(
    <SafeAreaView style={constants.formContainer}>
      <Image 
    source={require('../../../assets/mixer.png')}
    style={styles.mixer}
    />
      <View style={constants.innerContainer}>
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
      <Button title="Log In" onPress={() => navigation.navigate('Pick your mood')} /> 
      <Text>Don't have an account? </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
      <Text style={constants.links}>Register Now</Text>
      </TouchableOpacity>
      </View>
      </SafeAreaView>
  )
}

export default LoginScreen;