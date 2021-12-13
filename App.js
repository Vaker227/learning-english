import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Linking from "expo-linking";

import Login from "./src/pages/login/login.jsx";
import Home from "./src/pages/home/home.jsx";
import Account from "./src/pages/account/index.jsx";
import Learning from "./src/pages/learning/learning.jsx";
import Search from "./src/pages/search/search.jsx";
import MyTabBar from "./src/components/tabBar.jsx";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
          }}
          tabBar={MyTabBar}
        >
          <Tab.Screen name="Learning" component={Learning} />
          <Tab.Screen name="Seach" component={Search} />
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
