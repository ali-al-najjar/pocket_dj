import { View, Text, TextInput, TouchableOpacity, Image} from "react-native";
import styles from '../styles';
import {useState} from 'react';

const HomeScreen = () => {
  const [text,setText] = useState("")
  return(
    <View>
      <Image 
    source={require('../assets/banner.png')}/>
      <Text>Welcome!</Text>
      <View style={styles.loginContainer}>
      <Text>Email Address</Text>
      <TextInput
        defaultValue={text}
        onChangeText={txt=>{setText(text)}}
        style = {{borderWidth:1, padding:10}}
        />
      <Text>Password</Text>
      <TextInput
        defaultValue={text}
        onChangeText={txt=>{setText(text)}}
        style = {{borderWidth:1, padding:10}}
        />
        <TouchableOpacity style={styles.btn} onPress={() => console.log("hello")}>
          <Text>Click here</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default HomeScreen;