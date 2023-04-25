import { View, Text, TextInput, TouchableOpacity, Image} from "react-native";
import styles from './styles';
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import constants from '../../constants/styles';
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button/Button";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [first_name,setFirstName] = useState("")
  const [last_name,setLastName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirm_password,setConfirmPassword] = useState("")
  
  return(
    <SafeAreaView style={constants.formContainer}>
    <View style={constants.innerContainer}>
    <View style={constants.h1_view}>
      <Text style={constants.h1_text}>Create a new account</Text>
      </View>
      <Text>First Name</Text>
      <TextInput style={constants.textInput}
        defaultValue={first_name}
        onChangeText={txt=>{setFirstName(first_name)}}
        />
      <Text>Last Name</Text>
      <TextInput style={constants.textInput}
        defaultValue={last_name}
        onChangeText={pwd=>{setLastName(last_name)}}
        />
      <Text>Email Address</Text>
      <TextInput style={constants.textInput}
        defaultValue={email}
        onChangeText={txt=>{setEmail(email)}}
        />
      <Text>Password</Text>
      <TextInput style={constants.textInput}
        defaultValue={password}
        onChangeText={pwd=>{setPassword(password)}}
        />
      <Text>Confirm Password</Text>
      <TextInput style={constants.textInput}
        defaultValue={confirm_password}
        onChangeText={pwd=>{setConfirmPassword(confirm_password)}}
        />
        <Button title="Register" onPress={() => console.log("hello")} />
        <Text>Already have an account? </Text> 
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={constants.links}>Login Now</Text>
        </TouchableOpacity>
        </View>
        </SafeAreaView>
  )
}

export default RegisterScreen;