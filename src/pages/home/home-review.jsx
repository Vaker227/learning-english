import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ToastAndroid,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Pressable,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { getListUnitFromBook, getListWord } from "../learning/learning.service";
import WordType from "../../components/word-type";

export default function HomeReview({ navigation, ...props }) {
  const [basicSet, setBasicSet] = useState(true);
  const [selectedUnit, setSelectedUnit] = useState({ index: 0 });
  const [basicUnitList, setBasicUnitList] = useState([]);
  const [advanceUnitList, setAdvanceUnitList] = useState([]);
  const [unitListWord, setUnitListWord] = useState([]);
  const [viewingWord, setViewingWord] = useState(-1);

  // su kien chuyen set
  const handleChangeSet = () => {
    setBasicSet(!basicSet);
    setSelectedUnit({ index: 0 });
    if (basicSet) {
      getListWord(advanceUnitList[0].id).then((data) => setUnitListWord(data));
    } else {
      getListWord(basicUnitList[0].id).then((data) => setUnitListWord(data));
    }
  };
  // su kien chuyen unit
  const handleChangeUnit = (unitId, unitIndex) => {
    setSelectedUnit({ value: unitId, index: unitIndex });
    getListWord(unitId).then((data) => setUnitListWord(data));
  };
  // su kien show nghia word
  const handleShowMean = (wordIndex) => {
    if (wordIndex == viewingWord) {
      setViewingWord(-1);
      return;
    }
    setViewingWord(wordIndex);
  };
  const handleSaveWord = async (value) => {
    const newWordId = [value];
    const array = await AsyncStorage.getItem("word-memo");
    let objArray = JSON.parse(array);
    if (objArray != null) {
      if (objArray.indexOf(value) === -1) {
        objArray = objArray.concat(newWordId);
      }
      await AsyncStorage.setItem("word-memo", JSON.stringify(objArray));
    } else {
      await AsyncStorage.setItem("word-memo", JSON.stringify(newWordId));
    }
    ToastAndroid.show("Đã lưu vào ghi nhớ", ToastAndroid.SHORT);
  };
  // load unit khi khi khoi tao
  useEffect(() => {
    getListWord(1).then((data) => setUnitListWord(data));
  }, []);
  // get unit list
  useEffect(() => {
    if (!basicUnitList.length) {
      getListUnitFromBook(1).then((data) => {
        setBasicUnitList(data);
      });
    }
    if (!advanceUnitList.length) {
      getListUnitFromBook(2).then((data) => {
        setAdvanceUnitList(data);
      });
    }
  }, [basicSet]);

  const listUnit = basicSet ? basicUnitList : advanceUnitList;
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
          color: "#3d90e3",
          fontWeight: "bold",
        }}
      >
        Ôn tập
      </Text>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              textAlignVertical: "center",
              marginRight: 20,
              flexDirection: "row",
              borderRadius: 25,
              borderWidth: 3,
              borderColor: basicSet ? "#94e0eb" : "#82eb52",
            }}
          >
            <Text
              onPress={() => handleChangeSet()}
              style={{
                color: basicSet ? "white" : "#878787",
                fontWeight: basicSet ? "bold" : "normal",
                fontSize: 20,
                padding: 8,
                borderRadius: 21,
                backgroundColor: basicSet ? "#94e0eb" : "transparent",
              }}
            >
              Basic
            </Text>
            <Text
              onPress={() => handleChangeSet()}
              style={{
                color: !basicSet ? "white" : "#878787",
                fontWeight: !basicSet ? "bold" : "normal",
                fontSize: 20,
                padding: 8,
                borderRadius: 21,
                backgroundColor: !basicSet ? "#82eb52" : "transparent",
              }}
            >
              Advance
            </Text>
          </View>
          <View style={{ backgroundColor: basicSet ? "#94e0eb" : "#82eb52" }}>
            <Picker
              selectedValue={selectedUnit.value}
              style={{
                width: 150,
                color: "white",
              }}
              onValueChange={handleChangeUnit}
              mode="dropdown"
              prompt="Chọn unit"
            >
              {listUnit.map((unit) => (
                <Picker.Item
                  key={unit.id}
                  label={unit.unit_name + " - " + unit.name}
                  value={unit.id}
                />
              ))}
            </Picker>
          </View>
        </View>
        <Text
          style={{
            textAlign: "center",
            marginVertical: 20,
            fontSize: 18,
            borderRadius: 15,
            borderWidth: 2,
            borderColor: basicSet ? "#94e0eb" : "#82eb52",
            paddingVertical: 5,
          }}
        >
          {listUnit[selectedUnit.index]
            ? listUnit[selectedUnit.index].name
            : ""}
        </Text>
        <ScrollView
          style={{
            maxHeight: 370,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 10,
          }}
        >
          {unitListWord.map((word, wordIndex) => {
            return (
              <View style={{ marginVertical: 5 }} key={word.id}>
                <Pressable
                  onPress={() => handleShowMean(wordIndex)}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingRight: 7,
                  }}
                >
                  <Text>{word.content}</Text>
                  <Text style={{ color: "#8f8f8f" }}>{word.pronun_en}</Text>
                  <WordType type={word.word_form} size={16} />
                </Pressable>
                {viewingWord == wordIndex ? (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      alignItems: "center",
                      paddingVertical: 5,
                    }}
                  >
                    <Text style={{ color: "#3d90e3" }}>{word.mean_vn}</Text>
                    <AntDesign
                      name="book"
                      size={24}
                      color="#ffbb00"
                      style={{ marginLeft: 20 }}
                      onPress={() => handleSaveWord(word.id)}
                    />
                  </View>
                ) : null}
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
