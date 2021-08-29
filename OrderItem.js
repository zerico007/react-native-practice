import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  View,
  Text,
} from "react-native";

export default function OrderItem({
  productId,
  image,
  title,
  price,
  quantity,
  subtotal,
}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ borderRadius: 10 }}
        source={{
          uri: image,
          height: 150,
          width: 150,
        }}
      />
      <View style={styles.buttons}>
        <Text style={{ marginBottom: 10 }}>{title}</Text>
        <Text style={{ marginBottom: 10, fontWeight: "bold" }}>
          {`Price: $${price}.00 x ${quantity}`}
        </Text>
        <Text style={{ marginBottom: 10, fontWeight: "bold" }}>
          {`Subtotal: ${subtotal}`}
        </Text>
        <Pressable style={styles.button}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Buy Again</Text>
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