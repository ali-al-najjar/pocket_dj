import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Platform, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  
  return (
    <SafeAreaView>
    <LoginScreen></LoginScreen>
    <StatusBar style="dark" />
    </SafeAreaView>
  );
}


