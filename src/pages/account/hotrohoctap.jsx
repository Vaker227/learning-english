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
import { Entypo } from '@expo/vector-icons';
import Constants from "expo-constants";

export default function HoTroHocTap() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.content}>
          <Text style={styles.textSupport}>Hỗ Trợ Học Tập</Text>

        <View style={styles.form}>
          
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Hỗ Trợ App</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Hỗ Trợ Đọc Sách</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Thử Thách Hoàn Tiền 30 ngày</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Chia sẻ ứng dụng</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Góp ý</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ứng dụng của nhà phát triển</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Những Câu Hỏi Thường Gặp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Phiên Bản App{"\n"}<Text style = {styles.version}>1.10.2</Text></Text>
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
  textSupport: {
    ...TEXT,
    fontSize: 20,
    lineHeight: 50,
    fontWeight: "bold",
    color:"black",
  },
  form: {
    marginTop:20,
    marginBottom: 30,
  },
  inputPassword: {
    marginBottom:10,
    height: 60,
    borderRadius: 15,
    paddingHorizontal: 30,
    fontSize: 20,
    color: "#929292",
    backgroundColor: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
  },
  button: {
    height: 50,
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginTop: 30,
    borderStyle: "solid",
    borderWidth: 0.2,
    // borderColor: "green",
  },
  buttonText: {
    color:"black",
    marginLeft:30
  },
});