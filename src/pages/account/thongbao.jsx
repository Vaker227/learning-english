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
import { MaterialIcons } from "@expo/vector-icons";
import Constants from "expo-constants";

export default function ThongBao() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent />

      <View style={styles.content}>
        <Text style={styles.textPass}>Thông Báo</Text>

        <View style={styles.form}>
          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="notifications-active" style={styles.icon} />
            <Text style={styles.buttonText}>Khuyến Mãi</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="notifications-active" style={styles.icon} />
            <Text style={styles.buttonText}>Chị App Hack Não</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="notifications-active" style={styles.icon} />
            <Text style={styles.buttonText}>Kiến Thức Thú Vị</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="notifications-active" style={styles.icon} />
            <Text style={styles.buttonText}>Món Quà CUối Năm</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="notifications-active" style={styles.icon} />
            <Text style={styles.buttonText}>Giao Dịch</Text>
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
    // backgroundColor: "#fff",
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
    color: "#FAD502",
    position: "absolute",
    fontSize: 20,
    top: 16,
    left: 12,
    zIndex: 10,
  },
  button: {
    height: 50,
    borderRadius: 15,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "black",
    marginLeft: 40,
  },
});
