import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from './src/navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  
  return (
   
    <NavigationContainer>
      <StatusBar style = "dark" ></StatusBar>
      <HomeStack></HomeStack>
    </NavigationContainer>
  );
}


