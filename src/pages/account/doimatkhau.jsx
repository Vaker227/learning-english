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
// import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import Constants from "expo-constants";

export default function DoiMatKhau() {
  return (
    <SafeAreaView style={styles.container}>
      {/* https://docs.expo.io/versions/latest/sdk/status-bar */}
      <StatusBar style="light" />

      <View style={styles.content}>
        {/* <View style={styles.textWrapper}> */}
          <Text style={styles.textPass}>Đổi mật khẩu</Text>
        {/* </View> */}

        <View style={styles.form}>
          {/* https://docs.expo.io/guides/icons */}
          

          {/* https://reactnative.dev/docs/textinput */}
          <View >
          <Entypo name="eye-with-line" style={styles.iconLock}/>
            <TextInput
              style={styles.inputPassword}
              keyboardType="default"
              secureTextEntry={true}
              autoFocus={true}
              placeholder="Mật Khẩu Cũ"
              placeholderTextColor="#929292"
            />
          </View>
          

          {/* <FontAwesome5 name="lock" style={styles.iconLock} /> */}
          
          {/* import { Entypo } from '@expo/vector-icons'; */}

          {/* https://reactnative.dev/docs/textinput */}
          <View>
          <Entypo name="eye-with-line" style={styles.iconLock}/>
            <TextInput
              style={styles.inputPassword}
              keyboardType="default"
              secureTextEntry={true}
              autoFocus={true}
              placeholder="Mật Khẩu Mới"
              placeholderTextColor="#929292"
            />
          </View>
          

          
          {/* <FontAwesome5 name="lock" style={styles.iconLock} /> */}

          {/* https://reactnative.dev/docs/textinput */}
          <View>
          <Entypo name="eye-with-line" style={styles.iconLock}/>
          <TextInput
            style={styles.inputPassword}
            keyboardType="default"
            secureTextEntry={true}
            autoFocus={true}
            placeholder="Nhập Lại Mật Khẩu Mới"
            placeholderTextColor="#929292"
          />
          </View>


          {/* https://reactnative.dev/docs/touchableopacity */}
          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.buttonLoginText}>Lưu</Text>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.action}>
          <TouchableOpacity>
            <Text style={styles.userText}>QUÊN MẬT KHẨU</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.userText}>THOÁT TÀI KHOẢN</Text>
          </TouchableOpacity>
        </View> */}
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
    // backgroundColor: "#CAFCFC",
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    paddingHorizontal: 30,
  },
  // textWrapper: {
  //   marginTop: 60,
  //   marginBottom: 30,
  // },
  textPass: {
    ...TEXT,
    fontSize: 20,
    lineHeight: 50,
    fontWeight: "bold",
    color:"black",
  },
  // userText: {
  //   ...TEXT,
  //   fontSize: 16,
  //   lineHeight: 30,
  // },
  form: {
    marginTop:30,
    marginBottom: 30,
  },
  iconLock: {
    color: "#929292",
    position: "absolute",
    fontSize: 16,
    top: 22,
    left: 22,
    zIndex: 10,
  },
  // iconLock2: {
  //   color: "#929292",
  //   position: "absolute",
  //   fontSize: 16,
  //   top: 22,
  //   left: 22,
  //   zIndex: 10,
  // },
  // iconLock3: {
  //   color: "#929292",
  //   position: "absolute",
  //   fontSize: 16,
  //   top: 42,
  //   left: 22,
  //   zIndex: 10,
  // },
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
    borderStyle:"solid",
    borderWidth:1,
    borderColor:"green",
    // borderStyle: 2 ,"solid" 
  },
  buttonLogin: {
    height: 50,
    // width:100,
    // alignItems:"center",
    borderRadius: 25,
    backgroundColor: "#E08B1B",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonLoginText: {
    ...TEXT,
  },
  // action: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  // },
});