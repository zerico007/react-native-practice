import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  View,
  Text,
} from "react-native";
import ProductImage from "./ProductImage";
import commonStyles from "./Styles";

export default function OrderItem({
  productId,
  image,
  title,
  price,
  quantity,
  subtotal,
  addToCart,
  showConfirmScreen,
}) {
  async function handleAddToCart() {
    const params = { product: productId, quantity: 1 };
    console.log(`adding to cart ${title}`, params);
    try {
      await addToCart(params);
      showConfirmScreen();
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ProductImage img_url={image} />
      <View style={styles.buttons}>
        <Text style={{ marginBottom: 10 }}>{title}</Text>
        <Text style={{ marginBottom: 10, fontWeight: "bold" }}>
          {`Price: $${price}.00 x ${quantity}`}
        </Text>
        <Text style={{ marginBottom: 10, fontWeight: "bold" }}>
          {`Subtotal: ${subtotal}`}
        </Text>
        <Pressable onPress={handleAddToCart} style={commonStyles.btnSmall}>
          <Text style={{ fontWeight: "bold" }}>Buy Again</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    borderWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "white",
    alignItems: "center",
    height: 200,
    borderRadius: 10,
    margin: 20,
  },
  buttons: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
