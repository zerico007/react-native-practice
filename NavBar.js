import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Nav({ setAuthenticated, history }) {
  function handleLogout() {
    setAuthenticated(false);
    history.push("/");
  }
  return (
    <View style={styles.nav}>
      <Text style={styles.navItem} onPress={handleLogout}>
        Logout
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    alignSelf: "flex-start",
    marginBottom: 20,
    width: "100%",
    height: 70,
    flexDirection: "row",
    backgroundColor: "#333d51",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
  },
  navItem: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
