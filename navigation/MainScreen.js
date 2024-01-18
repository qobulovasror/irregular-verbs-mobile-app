import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import List from './screens/list';
import Test from "./screens/test";

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="List"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="List"
        options={{
          tabBarLabel: "Verbs",
          headerTitle: "Irregular verbs",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list" color={color} size={size} />
          ),
        }}
      >
        {(props) => ( <List {...props} />)}
      </Tab.Screen>
      <Tab.Screen
        name="Test"
        component={Test}
        options={{
          tabBarLabel: "Test",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="format-list-checks" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;