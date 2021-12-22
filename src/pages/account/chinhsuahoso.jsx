import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Constants from "expo-constants";

export default function ChinhSuaHoSo() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent />

      <View style={styles.content}>
        <Text style={styles.textProfile}>Chỉnh Sửa Hồ Sơ</Text>

        <View style={styles.form}>
          <View>
            <MaterialIcons name="account-circle" style={styles.icon} />
            <TextInput
              style={styles.inputUser}
              keyboardType="default"
              autoFocus={true}
              placeholder="Khanh pro"
              placeholderTextColor="black"
            />
          </View>

          <View>
            <AntDesign name="mail" style={styles.icon} />
            <TextInput
              style={styles.inputUser}
              keyboardType="default"
              autoFocus={true}
              placeholder="ezoko789@gmail.com"
              placeholderTextColor="black"
            />
          </View>

          <TouchableOpacity style={styles.buttonSave}>
            <Text style={styles.buttonSaveText}>Lưu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const TEXT = {
  color: "black",
  textAlign: "center",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    paddingHorizontal: 30,
  },
  textProfile: {
    ...TEXT,
    fontSize: 20,
    lineHeight: 50,
    fontWeight: "bold",
    color: "black",
  },
  form: {
    marginTop: 30,
    marginBottom: 30,
  },
  icon: {
    color: "#929292",
    position: "absolute",
    fontSize: 16,
    top: 22,
    left: 22,
    zIndex: 10,
  },
  inputUser: {
    marginBottom: 10,
    height: 60,
    borderRadius: 15,
    paddingHorizontal: 30,
    fontSize: 20,
    color: "black",
    backgroundColor: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "green",
  },
  buttonSave: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ffd978",
    justifyContent: "center",
    marginTop: 30,
    marginRight: 80,
    marginLeft: 80,
  },
  buttonSaveText: {
    ...TEXT,
  },
});
