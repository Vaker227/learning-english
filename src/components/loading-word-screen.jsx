import React, { useRef, useEffect } from "react";
import { Animated, Text, View, Easing } from "react-native";

const LoopAnimate = (props) => {
  const rotateAni = useRef(new Animated.Value(180)).current;
  const spin = rotateAni.interpolate({
    inputRange: [180, 360],
    outputRange: ["180deg", "360deg"],
  });
  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotateAni, {
          toValue: 360,
          duration: 2000,
          easing: Easing.ease,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View
      style={{
        position: "absolute",
        top: "50%",
        width: "120%",
        left: "-10%",
        backgroundColor: props.color || "#94e0eb",
        height: 20,
        zIndex: -100,
        transform: [{ rotateZ: spin }],
      }}
    ></Animated.View>
  );
};

export default function LoadingWordScreen(props) {
  return (
    <>
      {/* <View
        style={{
          backgroundColor: "white",
          width: props.width || "60%",
          padding: 5,
          position: "relative",
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        <LoopAnimate color={props.color} />
        <Text
          style={{
            backgroundColor: props.bg,
            textAlign: "center",
            padding: 10,
            fontSize: 30,
            borderRadius: 20,
          }}
        >
          {props.text}
        </Text>
      </View> */}
      <View
        style={{
          width: "100%",
          height: 3,
          backgroundColor: "#ddd",
          position: "relative",
        }}
      ></View>
      <View
        style={{
          paddingVertical: 45,
          paddingHorizontal: 30,
          backgroundColor: "#94e0eb",
        }}
      >
        <View
          style={{
            paddingVertical: 25,
            backgroundColor: "white",
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#94e0eb", fontSize: 35 }}> </Text>
          <Text style={{ color: "#d9d9d9", fontSize: 26 }}> </Text>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: "white",
          borderRadius: 20,
          marginTop: 20,
          marginHorizontal: 10,
          maxHeight: 210,
          height: 200,
        }}
      ></View>
    </>
  );
}
