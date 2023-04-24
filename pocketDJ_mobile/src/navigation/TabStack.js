import HomeScreen from "../screens/moods/MoodsScreen";
// import Screen2 from "../screens/screen2";
// import Screen3 from "../screens/screen3";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import Screen2Stack from "./Screen2Stack";

const TabStack = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        options={{
          tabBarIcon: () => (
            <Text>HO</Text>
            // <Ionicons name={"home"} size />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      {/* <Tabs.Screen
        options={{
          tabBarIcon: () => <Text>S2</Text>,
        }}
        name="Screen 2"
        component={Screen2}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: () => <Text>S3</Text>,
        }}
        name="Screen 3"
        component={Screen3}
      /> */}
    </Tabs.Navigator>
  );
};

export default TabStack;