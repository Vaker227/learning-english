import React, { useEffect, useState, useMemo } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import WordType from "../../components/word-type.jsx";
import { getListUnit, getListWord } from "./learning.service";

export default function DetaiUnit({ navigation, route }) {
  const [listWord, setListWord] = useState([]);
  const [wordIndex, setWordIndex] = useState(0);
  useEffect(async () => {
    if (route.params) {
      console.log(route.params.id);
      const list = await getListWord(route.params.id);
      setListWord(list);
      setWordIndex(0);
    }
  }, [route.params]);
//   console.log(listWord.length);
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
      style={{ paddingTop: StatusBar.currentHeight, backgroundColor: "f2f2f2" }}
    >
      <View>
        <TouchableOpacity
          style={{
            position: "absolute",
            left: 5,
            padding: 12,
            zIndex: 10,
          }}
          onPress={handleBack}
        >
          <AntDesign name="arrowleft" size={28} color="#ffb300" />
        </TouchableOpacity>
        {listWord.length > 0 && (
          <>
            <Text
              style={{ textAlign: "center", fontSize: 20, paddingVertical: 10 }}
            >
              {listWord[wordIndex].content}
            </Text>
            <View
              style={{
                paddingVertical: 50,
                paddingHorizontal: 30,
                backgroundColor: "#94e0eb",
              }}
            >
              <View
                style={{
                  paddingVertical: 30,
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
                backgroundColor: "white",
                borderRadius: 20,
                height: 100,
                marginTop: 20,
                marginHorizontal: 10,
                padding: 20,
              }}
            >
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
              </View>
              <Text style={{ fontSize: 15, color: "#d9d9d9" }}>
                {listWord[wordIndex].pronun_en}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: 10,
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
    </View>
  );
}
