import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function MyTabBar({ state, descriptors, navigation }) {
  const icons = [
    <Entypo
      name="book"
      size={24}
      style={{ alignSelf: "center" }}
      color="black"
    />,
    <AntDesign
      name="search1"
      size={24}
      style={{ alignSelf: "center" }}
      color="black"
    />,
    <AntDesign
      name="home"
      size={24}
      style={{ alignSelf: "center" }}
      color="black"
    />,
    <AntDesign
      name="user"
      size={24}
      style={{ alignSelf: "center" }}
      color="black"
    />,
  ];
  const iconsFocus = [
    <Entypo
      name="book"
      size={28}
      style={{ alignSelf: "center" }}
      color="#0f7416"
    />,
    <AntDesign
      name="search1"
      size={28}
      style={{ alignSelf: "center" }}
      color="#0f7416"
    />,
    <AntDesign
      name="home"
      size={28}
      style={{ alignSelf: "center" }}
      color="#0f7416"
    />,
    <AntDesign
      name="user"
      size={28}
      style={{ alignSelf: "center" }}
      color="#0f7416"
    />,
  ];
  const isDisplay = () => {
    const tabState = navigation.getState();
    if (tabState.routes[tabState.index].name == "Learning") {
      const stackState = tabState.routes[tabState.index].state;
      if (
        stackState &&
        stackState.routes[stackState.index].name == "DetailUnit"
      ) {
        return "none";
      }
    }
    return "flex";
  };
  return (
    <View
      style={{
        display: isDisplay(),
        flexDirection: "row",
        backgroundColor: "white",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#d9d9d9",
        borderStyle: "solid",
      }}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <View>
              {isFocused ? (
                <>
                  {iconsFocus[index]}
                  <Text style={isFocused ? { color: "#0f7416" } : {}}>
                    {route.name}
                  </Text>
                </>
              ) : (
                <>{icons[index]}</>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
