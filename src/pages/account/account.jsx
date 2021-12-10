import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function FacebookLogin() {
  return (
    <>
      <StatusBar style="light" />

      <Image
        source={require("../../../assets/background.jpg")}
        style={styles.banner}
      />

      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Image
            source={require("../../../assets/user.png")}
            style={styles.user}
          />

          <View style={styles.textWrapper}>
            <Text style={styles.hiText}>Khanh Proooo linh</Text>
            <Text style={styles.userText}>ezo***89@gmail.com</Text>
            <Text style={styles.userText}>039***4844</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Chỉnh sửa hồ sơ</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.form}>
            <TouchableOpacity style={styles.link}>
              <Ionicons
                name="notifications-circle-outline"
                style={styles.icon}
              />
              <Text style={styles.linkText}>Thông Báo</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ChangePassword");
              }}
              style={styles.link}
            >
              <AntDesign name="unlock" style={styles.icon} />
              <Text style={styles.linkText}>Đổi Mật Khẩu</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.link}>
              <MaterialIcons name="support-agent" style={styles.icon} />
              <Text style={styles.linkText}>Hỗ Trợ Học Tập</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.link}>
              <AntDesign name="facebook-square" style={styles.icon} />
              <Text style={styles.linkText}>Cộng Đồng</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>HOẶC</Text>
            <View style={styles.dividerLine} />
          </View>

          <TouchableOpacity style={[styles.button, styles.buttonRegister]}>
            <Text style={[styles.buttonText, styles.buttonRegisterText]}>
              Đăng Xuất
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const TEXT = {
  color: "black",
  textAlign: "center",
};

const handlePress = {};

const styles = StyleSheet.create({
  banner: {
    resizeMode: "contain",
    position: "relative",
    width: "100%",
    height: null,
    aspectRatio: 750 / 460, // Image ratio
  },
  user: {
    position: "absolute",
    top: -50,
    left: 110,
    resizeMode: "contain",
    width: "50%",
    height: null,
    aspectRatio: 750 / 460, // Image ratio
  },
  container: {
    flex: 1,
    // justifyContent: "space-between",
  },
  content: {
    padding: 22,
  },
  textWrapper: {
    marginTop: 10,
    marginBottom: 10,
  },
  hiText: {
    ...TEXT,
    fontSize: 20,
    lineHeight: 50,
    fontWeight: "bold",
  },
  userText: {
    ...TEXT,
    fontSize: 16,
    lineHeight: 30,
  },
  button: {
    height: 42,
    backgroundColor: "#D0FA58",
    justifyContent: "center",
    marginVertical: 15,
    marginLeft: 80,
    marginRight: 80,
    // shadowColor:"black",
    borderRadius: 12,
  },
  buttonText: {
    ...TEXT,
    fontSize: 16,
  },
  icon: {
    color: "#929292",
    position: "absolute",
    fontSize: 24,
    top: 10,
    left: 5,
    zIndex: 10,
    color: "#FF8000",
  },
  link: {
    paddingVertical: 8,
  },
  linkText: {
    color: "#1c6ede",
    // textAlign: "center",
    marginLeft: 40,
    fontSize: 20,
    fontWeight: "500",
  },
  footer: {
    alignItems: "center",
    padding: 22,
    paddingBottom: 100,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
    marginBottom: 10,
  },
  dividerLine: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#cbccd0",
  },
  dividerText: {
    width: 50,
    textAlign: "center",
  },
  buttonRegister: {
    width: "100%",
    backgroundColor: "#e7f3ff",
  },
  buttonRegisterText: {
    color: "#FF8000",
  },
});
