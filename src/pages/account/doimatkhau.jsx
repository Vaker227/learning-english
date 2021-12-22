import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Entypo } from "@expo/vector-icons";
import Constants from "expo-constants";

export default function DoiMatKhau() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.content}>
        <Text style={styles.textPass}>Đổi mật khẩu</Text>

        <View style={styles.form}>
          <View>
            <Entypo name="eye-with-line" style={styles.icon} />
            <TextInput
              style={styles.inputPassword}
              keyboardType="default"
              secureTextEntry={true}
              autoFocus={true}
              placeholder="Mật Khẩu Cũ"
              placeholderTextColor="#929292"
            />
          </View>

          <View>
            <Entypo name="eye-with-line" style={styles.icon} />
            <TextInput
              style={styles.inputPassword}
              keyboardType="default"
              secureTextEntry={true}
              autoFocus={true}
              placeholder="Mật Khẩu Mới"
              placeholderTextColor="#929292"
            />
          </View>

          <View>
            <Entypo name="eye-with-line" style={styles.icon} />
            <TextInput
              style={styles.inputPassword}
              keyboardType="default"
              secureTextEntry={true}
              autoFocus={true}
              placeholder="Nhập Lại Mật Khẩu Mới"
              placeholderTextColor="#929292"
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
  color: "#fff",
  textAlign: "center",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    paddingHorizontal: 30,
  },
  textPass: {
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
  inputPassword: {
    marginBottom: 10,
    height: 60,
    borderRadius: 15,
    paddingHorizontal: 30,
    fontSize: 20,
    color: "#929292",
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
    marginLeft:80,
    marginRight:80,
  },
  buttonSaveText: {
    ...TEXT,
  },
});
