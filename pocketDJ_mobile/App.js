import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from './src/navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import {store} from './src/redux/store'
import { Provider } from 'react-redux'

export default function App() {
  
  return (
    <Provider store={store}>
    <NavigationContainer>
      <StatusBar style = "dark" ></StatusBar>
      <HomeStack></HomeStack>
    </NavigationContainer>
    </Provider>
  );
}


