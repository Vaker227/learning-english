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
      <View
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Search</Text>
      </View>
    </View>
  );
}

export default Search;
