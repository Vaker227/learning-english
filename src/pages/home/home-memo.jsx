import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { getListWordFromListWordId } from "../learning/learning.service";
import WordType from "../../components/word-type";

export default function HomeMemo({ navigation, ...props }) {
  const [listWord, setListWord] = useState([]);

  useEffect(async () => {
    const listId = await getList();
    if (!listId) {
      return;
    }
    const result = await getListWordFromListWordId(listId);
    setListWord(result);
  }, []);

  const getList = async () => {
    try {
      const strArray = await AsyncStorage.getItem("word-memo");
      return JSON.parse(strArray);
    } catch (e) {
      console.log(e);
    }
  };

  const handleRemoveWord = async (wordId) => {
    try {
      const listId = JSON.parse(await AsyncStorage.getItem("word-memo"));
      const newListId = listId.filter((id) => id !== wordId);
      await AsyncStorage.setItem("word-memo", JSON.stringify(newListId));
      const result = await getListWordFromListWordId(newListId);
      setListWord(result);
    } catch (e) {
      console.log(e);
    }
  };

  const handleFinishWord = (word) => {
    Alert.alert(
      `Bạn đã học xong ${word.content} ?`,
      "Từ này sẽ được xóa khỏi danh sách ghi nhớ",
      [
        {
          text: "Hủy",
        },
        {
          text: "Xóa",
          onPress: () => handleRemoveWord(word.id),
        },
      ],
      {
        cancelable: true,
      }
    );
  };
  const clearAll = () => {
    Alert.alert(
      `Xóa tất cả`,
      "Bạn chắc chắn muốn xóa hết ghi nhớ ?",
      [
        {
          text: "Hủy",
        },
        {
          text: "Xóa hết",
          onPress: async () => {
            await AsyncStorage.removeItem("word-memo");
            setListWord([]);
          },
        },
      ],
      {
        cancelable: true,
      }
    );
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
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 10,
          padding: 12,
          top: StatusBar.currentHeight,
          zIndex: 10,
        }}
        onPress={clearAll}
      >
        <FontAwesome5 name="eraser" size={24} color="red" />
      </TouchableOpacity>
      <ScrollView
        style={{
          margin: 20,
          flex: 1,
          backgroundColor: "white",
          padding: 15,
          borderRadius: 10,
        }}
      >
        {listWord.map((word, wordIndex) => {
          return (
            <View style={{ marginVertical: 5 }} key={word.id}>
              <View
                onPress={() => handleShowMean(wordIndex)}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text>{word.content}</Text>
                <Text style={{ color: "#8f8f8f" }}>{word.pronun_en}</Text>
                <WordType type={word.word_form} size={16} />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingVertical: 5,
                }}
              >
                <Text style={{ color: "#3d90e3" }}>{word.mean_vn}</Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#53eded",
                    paddingHorizontal: 5,
                    paddingVertical: 2,
                    borderRadius: 5,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  onPress={() => handleFinishWord(word)}
                >
                  <Text style={{ fontSize: 12, color: "white" }}>Xóa</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
