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
    if (username == "admin" && password == "123") {
      navigation.navigate("MainComponents");
      return;
    }
    setValidation(true);
  };
  const handleLoginAsGuest = () => {
    navigation.navigate("MainComponents");
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
      {validation && (
        <Text style={{ color: "red" }}>Invalid username or password</Text>
      )}
      <TouchableOpacity style={styles.touchable} onPress={handleLogin}>
        <Text style={[styles.loginBtn, { backgroundColor: "#a3b0ed" }]}>
          Login
        </Text>
      </TouchableOpacity>
      <Text>Or</Text>
      <TouchableOpacity style={styles.touchable} onPress={handleLoginAsGuest}>
        <Text style={[styles.loginBtn, { backgroundColor: "#5fcf6e" }]}>
          Login as Guest
        </Text>
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
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: "70%",
    fontSize: 20,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#a3b0ed",
    backgroundColor: "white",
    marginVertical: 5,
  },
  loginBtn: {
    color: "white",
    marginVertical: 10,
    textAlign: "center",
    paddingVertical: 10,
    borderRadius: 10,
    width: 150,
    fontSize: 20,
  },
});

export default Login;
