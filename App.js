import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Linking from "expo-linking";

import Login from "./src/pages/login/login.jsx";
import Home from "./src/pages/home/home.jsx";
import Account from "./src/pages/account/index.jsx";
import Learning from "./src/pages/learning/learning.jsx";
import Search from "./src/pages/search/search.jsx";
import MyTabBar from "./src/components/tabBar.jsx";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainCompoments({ navigation, ...props }) {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
        tabBar={MyTabBar}
      >
        <Tab.Screen
          name="Learning"
          component={Learning}
          options={{ title: "Học" }}
        />
        <Tab.Screen
          name="Seach"
          component={Search}
          options={{ title: "Tìm kiếm" }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ title: "Trang chính" }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{ title: "Tài khoản" }}
        />
      </Tab.Navigator>
    </>
  );
}

function App() {
  const url = Linking.useURL(Linking.createURL());
  console.log(url);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="MainComponents" component={MainCompoments} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
export default App;
