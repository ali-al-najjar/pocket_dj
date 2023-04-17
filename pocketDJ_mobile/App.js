import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  
  return (
    <SafeAreaView>
    <HomeScreen></HomeScreen>
    <StatusBar style="dark" />
    </SafeAreaView>
  );
}


