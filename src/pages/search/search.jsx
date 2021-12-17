import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { searchWord, getWord } from "./search.service";

function ResultWord(props) {
  return (
    <TouchableOpacity
      style={{
        padding: 3,
        borderColor: "#ebebeb",
        borderBottomWidth: 1,
        borderStyle: "solid",
      }}
      onPress={() => {
        props.onSelect(props.word.word);
      }}
    >
      <Text style={{ fontWeight: "bold" }}>{props.word.word}</Text>
      <Text style={{ color: "#242424" }}>{props.word.mean}</Text>
    </TouchableOpacity>
  );
}

function Search(props) {
  const [text, setText] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [resultList, setResultList] = useState([]);
  const [timeoutSearch, setTimeoutSearching] = useState(0);
  const [wordResult, setWordResult] = useState(null);
  const [noResult, setNoResult] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const searchInput = useRef();
  const handleChange = (text) => {
    setText(text);
    setShowResult(false);
    if (text === "") {
      setResultList([]);
    }
    clearTimeout(timeoutSearch);
    setTimeoutSearching(
      setTimeout(() => {
        if (text !== "") {
          searchWord(text).then((list) => {
            if (list.length < 1) {
              setNoResult(true);
            } else {
              setNoResult(false);
            }
            setResultList(list);
            setShowResult(true);
          });
        }
      }, 1000)
    );
  };
  const handleGetWord = (word) => {
    getWord(word).then((result) => {
      setResultList([]);
      setText(result.word);
      setWordResult(result);
      Keyboard.dismiss();
    });
  };
  const handleFocus = (isFocus) => {
    setIsSearching(isFocus);
  };
  const clearText = () => {
    setText("");
    setNoResult(false);
    setWordResult(null);
    setResultList([]);
    setIsSearching(true);
    searchInput.current.focus();
  };

  return (
    <>
      <StatusBar style="default" />
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        style={{
          padding: StatusBar.currentHeight,
        }}
      >
        {!isSearching && text === "" && (
          <Image
            source={require("../../../assets/book.png")}
            style={{
              position: "absolute",
              marginTop: 30,
              width: "100%",
              height: 150,
              resizeMode: "contain",
            }}
          />
        )}
        {(isSearching || text !== "") && (
          <Text style={{ fontSize: 30, textAlign: "center" }}>Tra cứu</Text>
        )}
        <View
          style={{
            height: "100%",
            justifyContent: `${
              isSearching || text !== "" ? "flex-start" : "center"
            }`,
            alignItems: "center",
          }}
        >
          <View style={{ width: "80%" }}>
            <View style={{ position: "relative" }}>
              <TextInput
                ref={searchInput}
                onChangeText={handleChange}
                onFocus={() => handleFocus(true)}
                onBlur={() => handleFocus(false)}
                value={text}
                style={styles.searchInput}
                placeholder="Tra từ điển"
              ></TextInput>
              {text !== "" && (
                <AntDesign
                  name="close"
                  size={30}
                  color="#878787"
                  style={{
                    position: "absolute",
                    top: "35%",
                    right: 10,
                    padding: 4,
                    zIndex: 100,
                  }}
                  onPress={clearText}
                />
              )}
            </View>
            {resultList.length > 0 && (
              <View
                style={{
                  backgroundColor: "white",
                  borderStyle: "solid",
                  borderWidth: 2,
                  borderRadius: 5,
                  borderColor: "#ff99a0",
                  padding: 5,
                  paddingBottom: 0,
                  width: "94%",
                  alignSelf: "center",
                  marginTop: 10,
                }}
              >
                {resultList.map((result, inx) => {
                  return (
                    <ResultWord
                      key={inx}
                      word={result}
                      onSelect={handleGetWord}
                    />
                  );
                })}
              </View>
            )}
            {noResult && showResult && (
              <Text
                style={{
                  backgroundColor: "white",
                  marginTop: 10,
                  fontSize: 20,
                  textAlign: "center",
                  width: "94%",
                  alignSelf: "center",
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: "#d1d1d1",
                  paddingVertical: 5,
                }}
              >
                <AntDesign
                  name="exclamationcircleo"
                  size={18}
                  color="#c4671a"
                />{" "}
                No results found
              </Text>
            )}
            {wordResult != null && (
              <View
                style={{
                  backgroundColor: "white",
                  marginTop: 20,
                  padding: 10,
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: "#d1d1d1",
                  paddingVertical: 5,
                }}
              >
                <Text
                  style={{
                    fontSize: 28,
                    color: "#138fa1",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {wordResult.word}
                </Text>
                <Text style={{ fontSize: 16 }}>
                  <MaterialCommunityIcons
                    name="tag-text-outline"
                    size={16}
                    color="black"
                  />{" "}
                  {wordResult.mean}
                </Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    paddingLeft: 10,
    paddingRight: 50,
    borderColor: "#fc7982",
    borderRadius: 6,
    backgroundColor: "white",
    width: "100%",
    color: "#20232a",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Search;
