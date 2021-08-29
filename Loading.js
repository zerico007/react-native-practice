import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Loader() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
      <Icon name="spinner" color="#fff" size={42} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "120%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
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
