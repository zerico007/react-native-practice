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
import commonStyles from "./Styles";

export default function Login({ navigation, handleLogin }) {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  async function onLogin() {
    const params = { email, password };
    try {
      const login = await handleLogin(params);
      //console.log(login);
      navigation.navigate("Apple Shop");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Welcome to Apple Shop</Text>
      <FontAwesomeIcon size={40} style={styles.icon} icon={faApple} />
      <SafeAreaView style={styles.form}>
        <TextInput
          value={email}
          onChangeText={onChangeEmail}
          style={commonStyles.input}
          keyboardType="email-address"
          placeholder="Email"
        />
        <TextInput
          value={password}
          onChangeText={onChangePassword}
          style={commonStyles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Pressable style={commonStyles.button} onPress={onLogin}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
        </Pressable>
        <Text
          onPress={() => navigation.navigate("Register")}
          style={{ marginTop: 10 }}
        >
          New here? Register
        </Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
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
});
