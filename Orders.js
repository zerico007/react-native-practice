import React from "react";
import { ScrollView, Text } from "react-native";
import OrderView from "./OrderView";

export default function Orders({ orders }) {
  return (
    <ScrollView
      contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}
      style={{ flex: 1, backgroundColor: "white" }}
    >
      {!orders.length && <Text>No orders placed yet!</Text>}
      {orders?.map((order, i) => (
        <OrderView
          total={order.order.OrderTotal}
          date={order.order.dateCreated}
          orderItems={order.order.items}
          //addToCart={addToCart}
          key={i}
        />
      ))}
    </ScrollView>
  );
}
