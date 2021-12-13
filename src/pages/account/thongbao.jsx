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
import { MaterialIcons } from '@expo/vector-icons';
import Constants from "expo-constants";

export default function ThongBao() {
  return (
    <SafeAreaView style={styles.container}>
      {/* https://docs.expo.io/versions/latest/sdk/status-bar */}
      <StatusBar style="light" />

      <View style={styles.content}>
        {/* <View style={styles.textWrapper}> */}
          <Text style={styles.textPass}>Thông Báo</Text>
        {/* </View> */}

        <View style={styles.form}>
          {/* https://docs.expo.io/guides/icons */}
          

          {/* https://reactnative.dev/docs/textinput */}
          {/* <View >
          <MaterialIcons name="notifications-active" style={styles.iconLock}/>
          <Text style = {styles.textNotify}>Kiến Thức Thú Vị</Text>
          </View> */}
          

          {/* <FontAwesome5 name="lock" style={styles.iconLock} /> */}
          
          {/* import { Entypo } from '@expo/vector-icons'; */}

          {/* https://reactnative.dev/docs/textinput */}
          {/* <View>
          <MaterialIcons name="notifications-active" style={styles.iconLock}/>
            <Text style = {styles.textNotify}>Món quà cuối năm</Text>
          </View> */}
          

          
          {/* <FontAwesome5 name="lock" style={styles.iconLock} /> */}

          {/* https://reactnative.dev/docs/textinput */}
          {/* <View >
          <MaterialIcons name="notifications-active" style={styles.iconLock}/>
          <Text style = {styles.textNotify}>Xin Lỗi Các Em</Text>
          </View> */}


          {/* https://reactnative.dev/docs/touchableopacity */}
          <TouchableOpacity style={styles.buttonLogin}>
            <MaterialIcons name="notifications-active" style={styles.iconLock}/>
            <Text style={styles.buttonLoginText}>Khuyến Mãi</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonLogin}>
            <MaterialIcons name="notifications-active" style={styles.iconLock}/>
            <Text style={styles.buttonLoginText}>Chị App Hack Não</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonLogin}>
            <MaterialIcons name="notifications-active" style={styles.iconLock}/>
            <Text style={styles.buttonLoginText}>Kiến Thức Thú Vị</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonLogin}>
            <MaterialIcons name="notifications-active" style={styles.iconLock}/>
            <Text style={styles.buttonLoginText}>Món Quà CUối Năm</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.buttonLogin}>
            <MaterialIcons name="notifications-active" style={styles.iconLock}/>
            <Text style={styles.buttonLoginText}>Giao Dịch</Text>
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
  color: "black",
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
    marginTop:30,
    marginBottom: 30,
  },
  iconLock: {
    color: "#FAD502",
    position: "absolute",
    fontSize: 20,
    top: 16,
    left: 12,
    
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
  textNotify: {
    marginBottom:10,
    height: 60,
    borderRadius: 15,
    paddingHorizontal: 30,
    fontSize: 20,
    color: "black",
    backgroundColor: "#fff",
    // textAlign: "center",
    textAlignVertical: "center",
    // borderStyle: 2 ,"solid" 
  },
  buttonLogin: {
    height: 50,
    // width:100,
    // alignItems:"center",
    borderRadius: 15,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonLoginText: {
    color:"black",
    marginLeft:40,
  },
  // action: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  // },
});