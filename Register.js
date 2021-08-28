import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
} from "react-native";
import { Link } from "react-router-native";

export default function Register({ onRegister }) {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [confirmPassword, onChangeConfirm] = useState("");
  const [username, onChangeUsername] = useState("");

  function onRegister() {
    alert(`Thanks for registering ${username}`);
  }

  return (
    <SafeAreaView style={styles.form}>
      <TextInput
        value={username}
        placeholder="Username"
        onChangeText={onChangeUsername}
        style={styles.input}
      />
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
      <TextInput
        value={confirmPassword}
        onChangeText={onChangeConfirm}
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
      />
      <Pressable style={styles.button} onPress={onRegister}>
        <Text style={{ color: "white", fontWeight: "bold" }}>Sign Up</Text>
      </Pressable>
      <Link to="/">
        <Text style={{marginTop: 10}}>Login instead.</Text>
      </Link>
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
