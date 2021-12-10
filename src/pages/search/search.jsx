import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  StatusBar,
} from "react-native";

function Search(props) {
  const [text, setText] = useState("");

  return (
    <View style={{ paddingTop: StatusBar.currentHeight }}>
      <Text>456</Text>
      <Text>789</Text>
      <Text>text:{text}</Text>
      <Text>tra cii</Text>
    </View>
  );
}

export default Search;
