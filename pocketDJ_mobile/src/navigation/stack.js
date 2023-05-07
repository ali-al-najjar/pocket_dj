import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login/LoginScreen';
import RegisterScreen from '../screens/register/RegisterScreen';
import TabStack from './TabStack';
import PlayerScreen from '../screens/player/PlayerScreen';
import SongsScreen from '../screens/songs/SongsScreen';
import Colors from '../constants/colors';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Back" component={LoginScreen} options={{headerShown: false}}/>

      <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: true, headerStyle: {backgroundColor: Colors.primaryColor},headerTintColor: Colors.white,}}/>

      <Stack.Screen name="Pick your mood" component={TabStack} options={{headerShown: true,headerStyle: {backgroundColor: Colors.primaryColor},headerTintColor: Colors.white,headerTitle: '',headerLeft: null,gestureEnabled: false}}/>

      <Stack.Screen name="Profile" component={TabStack} options={{headerShown: true,headerStyle: {backgroundColor: Colors.primaryColor},headerTitle: 'Update Your Profile',headerTintColor: Colors.white}}/>


      <Stack.Screen name="Player" component={PlayerScreen} options={{headerShown: true,headerStyle: {backgroundColor: Colors.primaryColor},headerTintColor: Colors.white,headerTitle: '',headerBackTitle: 'Back', }}/>

      <Stack.Screen name="Artist Player" component={SongsScreen} options={{headerShown: true,headerStyle: {backgroundColor: Colors.primaryColor},headerTintColor: Colors.white,headerTitle: '',headerBackTitle: 'Back',}}/>
    </Stack.Navigator>
  );
}