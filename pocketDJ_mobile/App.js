import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function App() {
  const [text,setText] = useState("")
  return (
    <SafeAreaView>
      <Text style={{fontSize:32}}>Log In</Text>
      <Text style={{fontSize:24}}>Platform: {Platform.OS === 'ios'?'ios':'android'}</Text>
    <ScrollView>
    <View style={styles.pinkContainer}>
      <TextInput
        defaultValue={text}
        onChangeText={txt=>{setText(text)}}
        style = {{borderWidth:1, padding:10}}
        />
        <TouchableOpacity style={styles.btn} onPress={() => console.log("hello")}>
          <Text>Click here</Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
    <StatusBar style="dark" />
    </SafeAreaView>
  );
}


