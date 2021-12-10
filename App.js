import React from "react";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "./src/pages/login/login.jsx";
import Home from "./src/pages/home/home.jsx";
import Account from "./src/pages/account/account.jsx";
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
          }}
          tabBar={MyTabBar}
        >
          <Tab.Screen name="Học" component={Learning} />
          <Tab.Screen name="Tra cứu" component={Search} />
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
