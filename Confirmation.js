import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Confirmation({ message }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Icon name="check-square" color="#fff" size={42} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    paddingTop: 200,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "rgba(0,0,0, 0.8)",
    zIndex: 3,
    elevation: 3,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 20,
  },
});
