import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
const Stack = createStackNavigator();

import HomeMemo from "./home-memo";
import HomeReview from "./home-review";

function HomeMain({ navigation, ...props }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeReview")}
        style={{
          marginVertical: 40,
          height: 150,
          width: "80%",
          backgroundColor: "white",
          borderRadius: 20,
          borderColor: "#3d90e3",
          borderWidth: 5,
          padding: 20,
          paddingLeft: 0,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={require("../../../assets/home-ontap.png")}
          style={{
            height: "100%",
            width: 150,
            resizeMode: "contain",
          }}
        />
        <View
          style={{ justifyContent: "space-around", alignItems: "flex-end" }}
        >
          <Text style={{ color: "#3d90e3", fontSize: 28, fontWeight: "bold" }}>
            Tổng hợp
          </Text>
          <Entypo
            name="arrow-long-right"
            size={32}
            color="#3d90e3"
            style={{
              width: 65,
              textAlign: "center",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#3d90e3",
            }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeMemo")}
        style={{
          height: 150,
          width: "80%",
          backgroundColor: "white",
          borderRadius: 20,
          borderColor: "#ff9933",
          borderWidth: 5,
          padding: 20,
          paddingLeft: 0,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={require("../../../assets/home-save.png")}
          style={{
            height: "100%",
            width: 150,
            resizeMode: "contain",
          }}
        />
        <View
          style={{ justifyContent: "space-around", alignItems: "flex-end" }}
        >
          <Text style={{ color: "#ff9933", fontSize: 28, fontWeight: "bold" }}>
            Ghi nhớ
          </Text>
          <Entypo
            name="arrow-long-right"
            size={32}
            color="#ff9933"
            style={{
              width: 65,
              textAlign: "center",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#ff9933",
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

function Home(props) {
  return (
    <Stack.Navigator
      initialRouteName="HomeMain"
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen name="HomeMain" component={HomeMain} />
      <Stack.Screen name="HomeReview" component={HomeReview} />
      <Stack.Screen name="HomeMemo" component={HomeMemo} />
    </Stack.Navigator>
  );
}
export default Home;
