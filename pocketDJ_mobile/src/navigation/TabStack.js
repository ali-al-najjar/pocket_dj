import MoodsScreen from "../screens/moods/MoodsScreen";
import RemixesScreen from "../screens/remixes/RemixesScreen";
import SearchScreen from "../screens/search/SearchScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Colors from "../constants/colors";
import ProfileScreen from "../screens/profile/ProfileScreen";
import { SafeAreaView } from "react-native-safe-area-context";


const TabStack = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator 
    screenOptions={{ headerShown: false,tabBarActiveTintColor: Colors.primaryColor,tabBarInactiveTintColor: Colors.black}}>

      <Tabs.Screen
        name="Create"
        component={MoodsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="pluscircleo" size={24} color = {color} />
          ),
          
        }}
      />
      <Tabs.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="search" size={24} color={color} />
          ),
          
        }}
        />
        <Tabs.Screen
        name="My Remixes"
        component={RemixesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="folder-music" size={24} color={color} />
          ),
          
        }}
        />
        <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="user" size={24} color={color} />
          ),
          
        }}
        />
    </Tabs.Navigator>
  );
};

export default TabStack;