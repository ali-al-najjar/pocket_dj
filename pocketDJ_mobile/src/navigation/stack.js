import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login/LoginScreen';
import RegisterScreen from '../screens/register/RegisterScreen';
import MoodsScreen from '../screens/moods/MoodsScreen';
import TabStack from './TabStack';
import PlayerScreen from '../screens/player/PlayerScreen';
import SongsScreen from '../screens/songs/SongsScreen';
import styles from '../constants/styles';
import Colors from '../constants/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Back" component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: true, headerStyle: {backgroundColor: Colors.primaryColor},headerTintColor: Colors.white,}}/>
      <Stack.Screen name="Pick your mood" component={TabStack} options={{headerShown: true,headerStyle: {backgroundColor: Colors.primaryColor},headerTintColor: Colors.white,headerTitle: '',headerLeft: null,gestureEnabled: false}}/>
      <Stack.Screen name="Profile" component={TabStack} options={{headerShown: true}}/>
      <Stack.Screen name="Player" component={PlayerScreen} options={{headerShown: true,headerStyle: {backgroundColor: Colors.primaryColor},headerTintColor: Colors.white,headerTitle: '',headerBackTitle: 'Back',}}/>
      <Stack.Screen name="Artist Player" component={SongsScreen} options={{headerShown: true,headerStyle: {backgroundColor: Colors.primaryColor},headerTintColor: Colors.white,headerTitle: '',headerBackTitle: 'Back',}}/>
    </Stack.Navigator>
  );
}