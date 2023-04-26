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
  const[error,setError]=useState("");


  const validateEmail=(email) =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);}

  const validatePassword=(password)=> {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return passwordRegex.test(password);
      }

      const handleSubmit = (e) => {
        e.preventDefault()
        if (validateEmail(email)){
          if(validatePassword(password)){
        const data = {
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: password,
          password2: confirm_password,
          role:"User"
        };
        console.log(data)
    }else(setError("Your password is malformed"))
  }else(setError("Your email is malformed"))}

  return(
    <SafeAreaView style={constants.formContainer}>
    <View style={constants.innerContainer}>
    <View style={constants.h1_view}>
      <Text style={constants.h1_text}>Create a new account</Text>
      </View>
      <Text>First Name</Text>
      <TextInput style={constants.textInput}
          placeholder="Enter your first name"
          onChangeText={(text) => setFirstName(text)}
          value={first_name}
        />
      <Text>Last Name</Text>
      <TextInput style={constants.textInput}
          placeholder="Enter your last name"
          onChangeText={(text) => setLastName(text)}
          value={last_name}
        />
      <Text>Email Address</Text>
      <TextInput style={constants.textInput}
          placeholder="Enter your email address"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      <Text>Password</Text>
      <TextInput style={constants.textInput}
          placeholder="Enter your password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      <Text>Confirm Password</Text>
      <TextInput style={constants.textInput}
          placeholder="Confirm your password"
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirm_password}
        />
      <Text>{error}</Text>
        <Button title="Register" onPress={handleSubmit} />
        <Text>Already have an account? </Text> 
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={constants.links}>Login Now</Text>
        </TouchableOpacity>
        </View>
        </SafeAreaView>
  )
}

export default RegisterScreen;


