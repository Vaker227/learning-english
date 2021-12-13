import React, { useEffect, useState, useMemo } from "react";
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import WordType from "../../components/word-type.jsx";
import { getListUnit, getListWord } from "./learning.service";
import LoadingWordScreen from "../../components/loading-word-screen.jsx";
import * as helper from "../../helper";

export default function DetaiUnit({ navigation, route }) {
  const [listWord, setListWord] = useState([]);
  const [wordIndex, setWordIndex] = useState(0);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(async () => {
    if (route.params) {
      const list = await getListWord(route.params.id);
      if (list.length > 0) {
        setListWord(list);
        setWordIndex(0);
        setShowLoading(false);
      } else {
        setShowLoading(true);
      }
    }
  }, [route.params.id]);
  const handleBack = () => {
    navigation.navigate("Chapters");
  };
  const handleNextWord = () => {
    if (wordIndex >= listWord.length - 1) {
      return;
    }
    setWordIndex(wordIndex + 1);
  };
  const handlePreviousWord = () => {
    if (wordIndex <= 0) {
      return;
    }
    setWordIndex(wordIndex - 1);
  };
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
        onPress={handleBack}
      >
        <AntDesign name="arrowleft" size={28} color="#ffb300" />
      </TouchableOpacity>
      <Text style={{ textAlign: "center", fontSize: 20, paddingVertical: 10 }}>
        {route.params.name}
      </Text>
      {showLoading ? (
        <View style={{ height: "100%" }}>
          <LoadingWordScreen
            text={"Loading unit word"}
            bg="#f2f2f2"
            color="#94e0eb"
          />
        </View>
      ) : (
        <>
          <View
            style={{
              width: "100%",
              height: 3,
              backgroundColor: "#ddd",
              position: "relative",
            }}
          >
            <View
              style={{
                position: "absolute",
                backgroundColor: "#228c22",
                height: "100%",
                width: ((wordIndex + 1) / listWord.length) * 100 + "%",
              }}
            ></View>
          </View>
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
              <Text style={{ color: "#94e0eb", fontSize: 35 }}>
                {listWord[wordIndex].content}
              </Text>
              <Text style={{ color: "#d9d9d9", fontSize: 26 }}>
                {listWord[wordIndex].pronun_en}
              </Text>
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
            }}
          >
            <ScrollView>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <WordType type={listWord[wordIndex].word_form} />
                <Text style={{ color: "#94e0eb", fontSize: 20, marginLeft: 5 }}>
                  {listWord[wordIndex].content}
                </Text>
                <Text
                  style={{ marginLeft: 10, fontSize: 15, color: "#d9d9d9" }}
                >
                  {listWord[wordIndex].pronun_en}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#138fa1" }}>
                  {helper.capitalize(listWord[wordIndex].mean_vn)}
                </Text>
                <Text
                  style={{ marginLeft: 10, fontSize: 15, color: "#ff0000" }}
                >
                  |{listWord[wordIndex].pronun_vn}|
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 16,
                  color: "black",
                }}
              >
                E.g: {listWord[wordIndex].exam_en}
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 14,
                  color: "#6b6b6b",
                }}
              >
                Sub: {listWord[wordIndex].exam_vn}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "center",
                  fontStyle: "italic",
                  color: "#a3a2a2",
                }}
              >
                {listWord[wordIndex].mean_en}
              </Text>
            </ScrollView>
          </View>

          {/* word move */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              position: "absolute",
              bottom: 10,
              left: 0,
              right: 0,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                paddingHorizontal: 60,
                paddingVertical: 7,
                borderColor: "#d9d9d9",
                borderWidth: 1,
                borderTopLeftRadius: 50,
                borderBottomLeftRadius: 60,
                marginEnd: 10,
              }}
              onPress={handlePreviousWord}
            >
              <Entypo name="chevron-left" size={24} color="#94e0eb" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                paddingHorizontal: 60,
                paddingVertical: 7,
                borderColor: "#d9d9d9",
                borderWidth: 1,
                borderTopRightRadius: 50,
                borderBottomRightRadius: 60,
              }}
              onPress={handleNextWord}
            >
              <Entypo name="chevron-right" size={24} color="#94e0eb" />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}
