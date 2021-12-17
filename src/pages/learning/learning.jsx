import React, { useEffect, useState } from "react";
import { Text, View, StatusBar, ScrollView, Button } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
const Stack = createStackNavigator();
import * as Linking from "expo-linking";

import { getListAllChapter } from "./learning.service";
import Chapter from "./chapter.jsx";
import DetaiUnit from "./detail-unit.jsx";
import { paymentRequest } from "../payment/payment.service";

function ListChapter({ navigation, ...props }) {
  const [chapters, setChapters] = useState("");
  useEffect(async () => {
    setChapters(await getListAllChapter());
  }, []);

  const handlePayment = () => {
    const url = Linking.createURL("learning");
    paymentRequest(url).then((data) => {
      Linking.openURL(data.deeplink);
    });
  };

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
      <ScrollView>
        <Text style={{ textAlign: "center", paddingVertical: 5, fontSize: 20 }}>
          Học từ
        </Text>
        <View style={{ padding: 20 }}>{list}</View>
        <Button onPress={handlePayment} title="Payment"></Button>
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
