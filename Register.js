import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
} from "react-native";
import commonStyles from "./Styles";

export default function Register({ onRegister, navigation }) {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [confirmPassword, onChangeConfirm] = useState("");
  const [username, onChangeUsername] = useState("");

  function onRegister() {
    alert(`Thanks for registering ${username}`);
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        value={username}
        placeholder="Username"
        onChangeText={onChangeUsername}
        style={commonStyles.input}
      />
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
      <TextInput
        value={confirmPassword}
        onChangeText={onChangeConfirm}
        style={commonStyles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
      />
      <Pressable style={commonStyles.button} onPress={onRegister}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Sign Up</Text>
      </Pressable>
      <Text
        style={{ marginTop: 10 }}
        onPress={() => navigation.navigate("Login")}
      >
        Login instead.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
