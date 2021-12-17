import React, { useEffect, useState, useMemo } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import { getListUnit } from "./learning.service";

export default function Chapter({ navigation, ...props }) {
  const [units, setUnits] = useState("");
  const [viewUnits, setViewUnits] = useState(false);
  const handlePress = async () => {
    if (!units) {
      setUnits(await getListUnit(props.chapter.id));
    }
    setViewUnits(!viewUnits);
  };
  const moveToUnit = (unitId, unitName) => {
    navigation.navigate("DetailUnit", { id: unitId, name: unitName });
  };
  const listUnits = useMemo(() => {
    if (!units) {
      return;
    }
    return units.map((unit, index) => (
      <TouchableOpacity
        key={index}
        style={{
          borderColor: "#d9d9d9",
          borderStyle: "solid",
          borderRadius: 20,
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
        onPress={() => moveToUnit(unit.id, unit.name)}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ maxWidth: "90%" }}>
            {unit.unit_name} - {unit.name}
          </Text>
          <Entypo
            name="chevron-right"
            size={24}
            color={props.bookId == 1 ? "#94e0eb" : "#6eeb34"}
          />
        </View>
      </TouchableOpacity>
    ));
  }, [viewUnits]);
  return (
    <View>
      <TouchableOpacity
        onPress={handlePress}
        style={{
          backgroundColor: "white",
          borderColor: props.bookId == 1 ? "#94e0eb" : "#6eeb34",
          borderStyle: "solid",
          borderWidth: 2,
          borderRadius: 10,
          padding: 10,
          marginTop: 20,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 18 }}>{props.chapter.name}</Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: props.bookId == 1 ? "#94e0eb" : "#6eeb34",
            }}
          >
            {props.bookId == 1 ? "Basic" : "Advance"}
          </Text>
        </View>
      </TouchableOpacity>
      {viewUnits && (
        <View
          style={{
            backgroundColor: "white",
            marginHorizontal: 20,
            borderColor: props.bookId == 1 ? "#94e0eb" : "#6eeb34",
            borderStyle: "solid",
            borderWidth: 1,
            borderTopWidth: 0,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            padding: 10,
          }}
        >
          {listUnits}
        </View>
      )}
    </View>
  );
}
