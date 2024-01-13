import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import List from './screens/list';
import Test from "./screens/test";
import TestRender from './stackScreens/TestRender';
import { useState } from 'react';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainScreen = ({navigation, seleVerb, setSeleVerb}) => {
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
        options={{
          tabBarLabel: "Test",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="format-list-checks" color={color} size={size} />
          ),
        }}
      >
        {(props)=>(<Test {...props} navigation={navigation} seleVerb={seleVerb} setSeleVerb={setSeleVerb}/>)}
      </Tab.Screen>
     
    </Tab.Navigator>
  );
};

function MySnack() {
  const [seleVerb, setSeleVerb] = useState()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        options={{
          headerShown: false,
        }}
      >
        {(props) => ( <MainScreen {...props} seleVerb={seleVerb} setSeleVerb={setSeleVerb} />)}
      </Stack.Screen>
      <Stack.Screen
        name="Test"
        options={{ headerStyleInterpolator: forFade }}
      >
        {(props=>(<TestRender {...props} seleVerb={seleVerb} setSeleVerb={setSeleVerb} />))}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
export default MySnack;



const forFade = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};