import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  Button,
} from "react-native";
import { Link } from "react-router-native";

export default function Login({ history }) {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  function onLogin() {
    const params = { email, password };
    // handleLogin(params);
    console.log(params);
    history.push('/products')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Welcome to Apple Shop</Text>
      <FontAwesomeIcon size={40} style={styles.icon} icon={faApple} />
      <SafeAreaView style={styles.form}>
        <TextInput
          value={email}
          onChangeText={onChangeEmail}
          style={styles.input}
          keyboardType="email-address"
          placeholder="Email"
        />
        <TextInput
          value={password}
          onChangeText={onChangePassword}
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Pressable style={styles.button} onPress={onLogin}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
        </Pressable>
        <Link to="/register">
          <Text style={{marginTop: 10}}>New here? Register</Text>
        </Link>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
    margin: 12,
    borderRadius: 5,
    color: "black",
    backgroundColor: "#fff",
    padding: 10,
  },
  image: {
    flex: 0.5,
    justifyContent: "center",
  },
  heading: {
    fontSize: 32,
  },
  icon: {
    marginBottom: 70,
    marginTop: 20,
  },
  button: {
    borderWidth: 1,
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333d51",
    borderRadius: 5,
  },
});
