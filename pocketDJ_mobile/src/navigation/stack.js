import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login/LoginScreen';
import RegisterScreen from '../screens/register/RegisterScreen';
import MoodsScreen from '../screens/moods/MoodsScreen';
import TabStack from './TabStack';
import PlayerScreen from '../screens/player/PlayerScreen';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Back" component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: true}}/>
      <Stack.Screen name="Pick your mood" component={TabStack} options={{headerShown: false}}/>
      <Stack.Screen name="Player" component={PlayerScreen} options={{headerShown: true}}/>
    </Stack.Navigator>
  );
}