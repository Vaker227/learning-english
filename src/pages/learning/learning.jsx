import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  StatusBar,
  ScrollView,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import { getListChapter, getListUnit, getListWord } from "./learning.service";
import Chapter from "./chapter.jsx";
import DetaiUnit from "./detail-unit.jsx";

function ListChapter({ navigation, ...props }) {
  const [chapters, setChapters] = useState("");
  useEffect(async () => {
    setChapters(await getListChapter());
  }, []);
  let list;
  if (chapters) {
    list = chapters.map((chapter, index) => {
      return <Chapter key={index} chapter={chapter} navigation={navigation} />;
    });
  }
  return (
    <View
      style={{
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#f2f2f2",
      }}
    >
      <ScrollView>
        <Text style={{ textAlign: "center", paddingVertical: 5, fontSize: 20 }}>
          Học từ
        </Text>
        <View style={{ padding: 20 }}>{list}</View>
      </ScrollView>
    </View>
  );
}

function Learning(props) {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Chapters"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Chapters" component={ListChapter} />
        <Stack.Screen name="Detail" component={DetaiUnit} />
      </Stack.Navigator>
    </>
  );
}

export default Learning;
