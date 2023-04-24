import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login/LoginScreen';
import RegisterScreen from '../screens/register/RegisterScreen';
import MoodsScreen from '../screens/moods/MoodsScreen';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: true}}/>
      <Stack.Screen name="Pick your mood" component={MoodsScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}