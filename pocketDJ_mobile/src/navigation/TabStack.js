import MoodsScreen from "../screens/moods/MoodsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const TabStack = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="Create"
        component={MoodsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="pluscircleo" size={24} color="black" />
          ),
          
        }}
      />
      <Tabs.Screen
        name="Search"
        component={MoodsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="search" size={24} color="black" />
          ),
          
        }}
        />
        <Tabs.Screen
        name="My Remixes"
        component={MoodsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="search" size={24} color="black" />
          ),
          
        }}
        />
    </Tabs.Navigator>
  );
};

export default TabStack;