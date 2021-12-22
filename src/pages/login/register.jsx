import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

function Register({ navigation, ...props }) {
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

  const handleRegister = () => {
    if (username != "" && passwprd) {
      setShowPassword(true);
      return;
    }
    setValidation(true);
  };
  const moving = (page) => {
    navigation.navigate(page);
  };
  return (
    <View
      style={{
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
        value={password}
        onChange={handleChangePassword}
      ></TextInput>
      {validation && <Text style={{ color: "red" }}>Must fill all</Text>}
      <TouchableOpacity style={styles.touchable} onPress={handleRegister}>
        <Text style={styles.getBtn}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => moving("Login")}
      >
        <Text>Back to Login</Text>
      </TouchableOpacity>
    </View>
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
  getBtn: {
    color: "white",
    marginVertical: 10,
    backgroundColor: "#a3b0ed",
    textAlign: "center",
    paddingVertical: 10,
    borderRadius: 10,
    width: 150,
    fontSize: 20,
  },
});

export default Register;
