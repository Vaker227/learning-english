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

import { getListUnit, getListWord } from "./learning.service";

export default function Chapter({ navigation, ...props }) {
  const [units, setUnits] = useState("");
  const [viewUnits, setViewUnits] = useState(false);
  const handlePress = async () => {
    if (!units) {
      setUnits(await getListUnit(props.chapter.id));
    }
    setViewUnits(!viewUnits);
  };
  const moveToUnit = (unitId) => {
    navigation.navigate("Detail", { id: unitId });
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
        onPress={() => moveToUnit(unit.id)}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text>
            {unit.unit_name} - {unit.name}
          </Text>
          <Entypo name="chevron-right" size={24} color="#94e0eb" />
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
          borderColor: "#94e0eb",
          borderStyle: "solid",
          borderWidth: 2,
          borderRadius: 10,
          padding: 10,
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 18 }}>{props.chapter.name}</Text>
      </TouchableOpacity>
      {viewUnits && (
        <View
          style={{
            backgroundColor: "white",
            marginHorizontal: 20,
            borderColor: "#94e0eb",
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
