import { View, Text, TextInput, TouchableOpacity, Image} from "react-native";
import styles from './styles';
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [first_name,setFirstName] = useState("")
  const [last_name,setLastName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirm_password,setConfirmPassword] = useState("")
  return(
    <View >
    <View style={styles.loginContainer}>
    <View style={styles.h1_view}>
      <Text style={styles.h1_text}>Create a new account</Text>
      </View>
      <Text>First Name</Text>
      <TextInput style={styles.textInput}
        defaultValue={first_name}
        onChangeText={txt=>{setFirstName(first_name)}}
        />
      <Text>Last Name</Text>
      <TextInput style={styles.textInput}
        defaultValue={last_name}
        onChangeText={pwd=>{setLastName(last_name)}}
        />
      <Text>Email Address</Text>
      <TextInput style={styles.textInput}
        defaultValue={email}
        onChangeText={txt=>{setEmail(email)}}
        />
      <Text>Password</Text>
      <TextInput style={styles.textInput}
        defaultValue={password}
        onChangeText={pwd=>{setPassword(password)}}
        />
      <Text>Confirm Password</Text>
      <TextInput style={styles.textInput}
        defaultValue={confirm_password}
        onChangeText={pwd=>{setConfirmPassword(confirm_password)}}
        />
        <TouchableOpacity style={styles.btn} onPress={() => console.log("hello")}>
          <Text style={styles.btn_text}>Register</Text>
        </TouchableOpacity>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.links}>Login Now</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default RegisterScreen;