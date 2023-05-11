import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from './src/navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import {store} from './src/redux/store'
import { Provider } from 'react-redux'
import { LogBox } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';


export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
    <NavigationContainer>
      <StatusBar style = "dark" ></StatusBar>
      <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }}>
      <HomeStack></HomeStack>
      </KeyboardAvoidingView>
    </NavigationContainer>
    </Provider>
  );
}
