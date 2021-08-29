import React from "react";
import { View, StyleSheet, Text, ScrollView, Pressable } from "react-native";
import CartItem from "./CartItem";
import { IMAGES_URL } from "./network";

export default function Cart({ cart, updateCart, removeFromCart, placeOrder }) {
  return (
    <ScrollView
      contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}
      style={styles.container}
    >
      {cart.items && (
        <Pressable onPress={placeOrder} style={styles.button}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Place Order
          </Text>
        </Pressable>
      )}
      {cart.items?.map((item, i) => {
        return (
          <CartItem
            image={`${IMAGES_URL}/${item.product.productImage}`}
            title={item.product.name}
            price={item.product.price}
            quantity={item.quantity}
            productId={item.product._id}
            updateCart={updateCart}
            removeFromCart={removeFromCart}
            key={i}
          />
        );
      })}
      {!cart.items && (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Your Shopping Cart is Empty. Fill it with goodies that you love!
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    flexDirection: "column",
  },
  button: {
    borderWidth: 1,
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333d51",
    borderRadius: 5,
    marginBottom: 15,
  },
});
