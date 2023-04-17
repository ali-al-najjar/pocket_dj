import { View, Text, TextInput, TouchableOpacity, Image} from "react-native";
import styles from '../styles';
import {useState} from 'react';

const LoginScreen = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  return(
    <View>
      <Image 
    source={require('../assets/banner.png')}/>
      <Text>Welcome!</Text>
      <View style={styles.loginContainer}>
      <Text>Email Address</Text>
      <TextInput style={styles.textInput}
        defaultValue={email}
        onChangeText={email=>{setEmail(email)}}
        />
      <Text>Password</Text>
      <TextInput style={styles.textInput}
        defaultValue={password}
        onChangeText={pwd=>{setPassword(password)}}
        />
        <TouchableOpacity style={styles.btn} onPress={() => console.log(email)}>
          <Text>Click here</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default LoginScreen;