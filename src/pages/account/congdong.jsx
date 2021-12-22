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
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Constants from "expo-constants";

export default function CongDong() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.content}>
          <Text style={styles.textCommunity}>Cộng Đồng</Text>

        <View style={styles.form}>
          <TouchableOpacity style={styles.button}>
            <Entypo name="facebook" style={[styles.icon,{color:"blue"}]} />
            <Text style={[styles.buttonText]}>Nhóm Học Viện</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Entypo name="facebook" style={[styles.icon,{color:"blue"}]} />
            <Text style={styles.buttonText}>Fanpage Step Up English</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
          <FontAwesome5 name="blogger" style={[styles.icon,{color:"green"}]} />
            <Text style={styles.buttonText}>blog Step Up English</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <AntDesign name="youtube" style={[styles.icon,{color:"red"}]} />
            <Text style={styles.buttonText}>Youtube Step Up English</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
          <AntDesign name="instagram" style={[styles.icon,{color:"violet"}]}/>
            <Text style={styles.buttonText}>Instagram Step Up English</Text>
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
    backgroundColor: "#CAFCFC",
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    paddingHorizontal: 30,
  },
  textCommunity: {
    ...TEXT,
    fontSize: 20,
    lineHeight: 50,
    fontWeight: "bold",
    color:"black",
  },
  form: {
    marginTop:30,
    marginBottom: 30,
  },
  icon: {
    position: "absolute",
    fontSize: 18,
    top: 15,
    left: 22,
    zIndex: 10,
  },
  button: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginTop: 30,
    shadowColor:"black",
  },
  buttonText: {
    color:"black",
    marginLeft:50
  },
});