import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Product from "./Product";

export default function Catalogue() {
  const products = ["apple", "carrot", "mango", "pear"];
  return (
    <ScrollView
      contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}
      style={styles.container}
    >
      <Text style={styles.text}>Catalogue</Text>
      {products.map((product) => {
        return <Product key={product} item={product} />;
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    flexDirection: "column",
  },
  text: {
    fontSize: 36,
    fontWeight: "bold",
  },
});
