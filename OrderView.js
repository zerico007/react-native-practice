import React from "react";
import { StyleSheet, View, Text } from "react-native";
import moment from "moment";
import OrderItem from "./OrderItem";
import { IMAGES_URL } from "./network";

export default function OrderView({ total, date, orderItems }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.headerText}>Total</Text>
          <Text style={styles.headerText}> {total} </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.headerText}>Date Ordered</Text>
          <Text style={styles.headerText}>{date.split(",")[0]}</Text>
        </View>
      </View>
      {orderItems?.map((item, i) => (
        <OrderItem
          image={`${IMAGES_URL}/${item.productImage}`}
          title={item.product}
          productId={item.productId}
          quantity={item.quantity}
          //addToCart={addToCart}
          price={item.unitPrice}
          subtotal={item.total}
          key={i}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    borderWidth: 1,
    margin: 20,
    borderRadius: 5,
    borderColor: "lightgrey",
  },
  header: {
    width: "90%",
    height: 70,
    padding: 20,
    margin: 20,
    borderWidth: 1,
    borderColor: "lightgrey",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "lightgrey",
    borderRadius: 5,
  },
  headerText: {
    fontWeight: "bold",
  },
});
