import React, { useEffect, useState, useMemo } from "react";
import { Text, View } from "react-native";

export default function WordType(props) {
  const style = {
    color: "white",
    paddingHorizontal: 5,
    fontSize: props.size || 20,
    borderRadius: 5,
  };
  switch (props.type) {
    case "N":
      style.backgroundColor = "#24a0ff";
      break;
    case "V":
      style.backgroundColor = "#ffb300";
      break;
    case "Adv":
      style.backgroundColor = "#fa1414";
      break;
    case "Adj":
      style.backgroundColor = "#ff7b00";
      break;
  }
  return <Text style={[style, props.style]}>{props.type}</Text>;
}
