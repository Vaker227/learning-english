import React, { useEffect, useState } from "react";
import { Text, View, StatusBar, ScrollView, Button } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
const Stack = createStackNavigator();

import { getListAllChapter } from "./learning.service";
import Chapter from "./chapter.jsx";
import DetaiUnit from "./detail-unit.jsx";

function ListChapter({ navigation, ...props }) {
  const [chapters, setChapters] = useState("");
  useEffect(async () => {
    setChapters(await getListAllChapter());
  }, []);

  let list;
  if (chapters) {
    list = chapters.map((chapter, index) => {
      return (
        <Chapter
          key={index}
          chapter={chapter}
          navigation={navigation}
          bookId={chapter.book_id}
        />
      );
    });
  }

  return (
    <View
      style={{
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#f2f2f2",
      }}
    >
      <StatusBar translucent />

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
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen name="Chapters" component={ListChapter} />
        <Stack.Screen name="DetailUnit" component={DetaiUnit} />
      </Stack.Navigator>
    </>
  );
}

export default Learning;
