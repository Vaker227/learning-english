import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

function Login({ navigation, ...props }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState(false);
  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
    if (validation) {
      setValidation(false);
    }
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    if (validation) {
      setValidation(false);
    }
  };
  const handleLogin = () => {
    navigation.navigate("MainComponents");
    // if (username == "admin" && password == "123") {
    //   return;
    // }
    // setValidation(true);
  };
  const moving = (page) => {
    navigation.navigate(page);
  };
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChange={handleChangeUsername}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
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
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  touchable: {
    marginVertical: 5,
  },
  input: {
    height: 40,
    borderRadius: 10,
    minWidth: "50%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#a3b0ed",
    backgroundColor: "white",
    marginVertical: 5,
    paddingHorizontal: 5,
  },
  loginBtn: {
    color: "white",
    marginVertical: 10,
    backgroundColor: "#a3b0ed",
    textAlign: "center",
    paddingVertical: 5,
    borderRadius: 10,
    width: 120,
    fontSize: 20,
  },
});

export default Login;
