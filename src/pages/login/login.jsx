import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

function Login(props) {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [validation, setValidation] = useState(false);
  // const handleChangeUsername = (e) => {
  //   setUsername(e.target.value);
  //   if (validation) {
  //     setValidation(false);
  //   }
  // };
  // const handleChangePassword = (e) => {
  //   setPassword(e.target.value);
  //   if (validation) {
  //     setValidation(false);
  //   }
  // };
  // const handleLogin = () => {
  //   if (username == "admin" && password == "123") {
  //     navigation.navigate("Home");
  //     return;
  //   }
  //   setValidation(true);
  // };
  // const moving = (page) => {
  //   navigation.navigate(page);
  // };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChange={handleChangeUsername}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChange={handleChangePassword}
      ></TextInput>
      {validation && <Text style={{ color: "red" }}>Wrong info</Text>}
      <TouchableOpacity style={styles.touchable} onPress={handleLogin}>
        <Text style={styles.loginBtn}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => moving("ForgetPassword")}
      >
        <Text>Forget password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => moving("Register")}
      >
        <Text>Register</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  touchable: {
    marginVertical: 5,
  },
  input: {
    height: "40px",
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#a3b0ed",
    backgroundColor: "white",
    marginVertical: "5px",
    paddingHorizontal: "5px",
  },
  loginBtn: {
    color: "white",
    marginVertical: "10px",
    backgroundColor: "#a3b0ed",
    textAlign: "center",
    paddingVertical: 5,
    borderRadius: 10,
    width: "120px",
    fontSize: 20,
  },
});

export default Login;
