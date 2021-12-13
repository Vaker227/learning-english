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
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Constants from "expo-constants";

export default function CongDong() {
  return (
    <SafeAreaView style={styles.container}>
      {/* https://docs.expo.io/versions/latest/sdk/status-bar */}
      <StatusBar style="light" />

      <View style={styles.content}>
        {/* <View style={styles.textWrapper}> */}
          <Text style={styles.textPass}>Cộng Đồng</Text>
        {/* </View> */}

        <View style={styles.form}>
          {/* https://docs.expo.io/guides/icons */}
          

          {/* https://reactnative.dev/docs/textinput */}
          {/* <View>
          <Entypo name="eye-with-line" style={styles.iconLock}/>
            <TextInput
              style={styles.inputPassword}
              keyboardType="default"
              secureTextEntry={true}
              autoFocus={true}
              placeholder="Mật Khẩu Cũ"
              placeholderTextColor="#929292"
            />
          </View> */}
          

          {/* <FontAwesome5 name="lock" style={styles.iconLock} /> */}
          
          {/* import { Entypo } from '@expo/vector-icons'; */}

          {/* https://reactnative.dev/docs/textinput */}
          {/* <View>
          <AntDesign name="youtube" style={styles.iconLock}/>
            <TextInput
              style={styles.inputPassword}
              keyboardType="default"
              secureTextEntry={true}
              autoFocus={true}
              placeholder="Mật Khẩu Mới"
              placeholderTextColor="#929292"
            />
          </View> */}
          

          
          {/* <FontAwesome5 name="lock" style={styles.iconLock} /> */}

          {/* https://reactnative.dev/docs/textinput */}
          {/* <View>
          <Entypo name="eye-with-line" style={styles.iconLock}/>
          <TextInput
            style={styles.inputPassword}
            keyboardType="default"
            secureTextEntry={true}
            autoFocus={true}
            placeholder="Nhập Lại Mật Khẩu Mới"
            placeholderTextColor="#929292"
          />
          </View> */}


          {/* https://reactnative.dev/docs/touchableopacity */}
          <TouchableOpacity style={styles.buttonLogin}>
            <Entypo name="facebook" style={[styles.iconLock,{color:"blue"}]} />
            <Text style={[styles.buttonLoginText]}>Nhóm Học Viện</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonLogin}>
            <Entypo name="facebook" style={[styles.iconLock,{color:"blue"}]} />
            <Text style={styles.buttonLoginText}>Fanpage Step Up English</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonLogin}>
          <FontAwesome5 name="blogger" style={[styles.iconLock,{color:"green"}]} />
            <Text style={styles.buttonLoginText}>blog Step Up English</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonLogin}>
            <AntDesign name="youtube" style={[styles.iconLock,{color:"red"}]} />
            <Text style={styles.buttonLoginText}>Youtube Step Up English</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonLogin}>
          <AntDesign name="instagram" style={[styles.iconLock,{color:"violet"}]}/>
            <Text style={styles.buttonLoginText}>Instagram Step Up English</Text>
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
    backgroundColor: "#CAFCFC",
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
    // marginTop:S0,
    marginBottom: 30,
  },
  iconLock: {
    
    position: "absolute",
    fontSize: 18,
    top: 15,
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
    // borderStyle: 2 ,"solid" 
  },
  buttonLogin: {
    height: 50,
    // width:100,
    // alignItems:"center",
    borderRadius: 25,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonLoginText: {
    color:"black",
    marginLeft:50
  },
  // action: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  // },
});