import { View, Text, TextInput, TouchableOpacity, Image} from "react-native";
import styles from '../styles';
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [first_name,setFirstName] = useState("")
  const [last_name,setLastName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  return(
    <View>
      <Image 
    source={require('../assets/banner.png')}/>
      <Text>Create a new account</Text>
      <View style={styles.loginContainer}>
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
        <TouchableOpacity style={styles.btn} onPress={() => console.log("hello")}>
          <Text>Register</Text>
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