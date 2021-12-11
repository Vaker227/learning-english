import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";

function Home(props) {
  console.log(StatusBar.currentHeight);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <Text>Home Screen</Text>
    </View>
  );
}
export default Home;
