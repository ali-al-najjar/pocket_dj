import { View, Text, TextInput, TouchableOpacity, Image} from "react-native";
import styles from './styles';
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import constants from '../../constants/styles';
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button/Button";
import { MaterialIcons } from '@expo/vector-icons';
import axios from "axios";
import { storeToken } from "../../auth/auth"
import { useDispatch } from "react-redux";
import { setUser } from '../../redux/slices/userSlice'
import { setToken } from "../../redux/slices/userAuthSlice";

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const[error,setError]=useState("");

  const validatePassword=(password)=> {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return passwordRegex.test(password);
      }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(username){
     if(validatePassword(password)){
        const data = {
          username: username,
          password: password
        };
        console.log(data)
        axios.post("http://192.168.1.127:8000/login",data,{
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((res)=>{
          setError("");
          storeToken(res.data.token);
          dispatch(setUser(res.data.user));
          dispatch(setToken(res.data.token))
          navigation.navigate("Pick your mood")
        })
        .catch((err=>{
          console.log(err.request.response);
          setError(<View style={constants.error_container}><MaterialIcons name="error-outline" size={24} color="red" /><Text style={constants.error}>Invalid Credentials. Try again!</Text></View>)
        }))
        
    }else(setError(<View style={constants.error_container}><MaterialIcons name="error-outline" size={24} color="red" /><Text style={constants.error}>Your password is malformed</Text></View>))
  }else(setError(<View style={constants.error_container}><MaterialIcons name="error-outline" size={24} color="red" /><Text style={constants.error}>Your username cannot be empty</Text></View>))}


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
      <Text>Username</Text>
      <TextInput style={constants.textInput}
          placeholder="Enter your username"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
      <Text>Password</Text>
      <TextInput style={constants.textInput}
          placeholder="Enter your password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

      <Text>{error}</Text>
      <Button title="Log In" onPress={handleSubmit} />
      <View style={constants.linksSection}>
      <Text>Don't have an account? </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
      <Text style={constants.links}>Register Now</Text>
      </TouchableOpacity>
      </View>
      </View>
      </SafeAreaView>
  )
}

export default LoginScreen;