import { View, Text, TextInput, TouchableOpacity, Image} from "react-native";
import styles from '../styles';
import {useState} from 'react';

const RegisterScreen = () => {
  const [first_name,setFirstName] = useState("")
  const [last_name,setLastName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  return(
    <View>
      <Image 
    source={require('../assets/banner.png')}/>
      <Text>Welcome!</Text>
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
          <Text>Click here</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default RegisterScreen;