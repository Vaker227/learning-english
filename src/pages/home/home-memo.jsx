import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function HomeMemo({ navigation, ...props }) {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#f2f2f2",
        position: "relative",
      }}
    >
      <TouchableOpacity
        style={{
          position: "absolute",
          left: 5,
          top: StatusBar.currentHeight,
          padding: 12,
          zIndex: 10,
        }}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={28} color="#ffb300" />
      </TouchableOpacity>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          paddingVertical: 10,
          color: "#ff9933",
          fontWeight: "bold",
        }}
      >
        Ghi nhớ
      </Text>
    </View>
  );
}
