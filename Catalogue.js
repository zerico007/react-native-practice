import React from "react";
import { View, StyleSheet, Text, ScrollView, Button } from "react-native";
import Product from "./Product";
import { IMAGES_URL } from "./network";

export default function Catalogue({ products, addToCart }) {
  return (
    <ScrollView
      contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}
      style={styles.container}
    >
      {products.map((product, i) => {
        return (
          <Product
            key={i}
            img_url={
              product.productImage && `${IMAGES_URL}/${product.productImage}`
            }
            addToCart={addToCart}
            title={product.name}
            price={product.price}
            id={product.id}
          />
        );
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
});
