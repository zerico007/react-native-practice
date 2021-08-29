import React from "react";
import { ScrollView, SafeAreaView, Text, Vibration } from "react-native";
import OrderView from "./OrderView";
import Confirmation from "./Confirmation";

export default function Orders({ orders, addToCart }) {
  const [confirm, setConfirm] = React.useState(false);

  const showConfirmScreen = () => {
    setConfirm(true);
    Vibration.vibrate();
    setInterval(() => {
      setConfirm(false);
    }, 1200);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {confirm && <Confirmation message="Added Item to Cart" />}
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        style={{ flex: 1, backgroundColor: "white" }}
      >
        {!orders.length && <Text>No orders placed yet!</Text>}
        {orders?.map((order, i) => (
          <OrderView
            total={order.order.OrderTotal}
            date={order.order.dateCreated}
            orderItems={order.order.items}
            addToCart={addToCart}
            showConfirmScreen={showConfirmScreen}
            key={i}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
