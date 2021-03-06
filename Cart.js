import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Pressable,
  SafeAreaView,
  Vibration
} from "react-native";
import CartItem from "./CartItem";
import { IMAGES_URL } from "./network";
import Confirmation from "./Confirmation";
import commonStyles from "./Styles";

export default function Cart({
  cart,
  updateCart,
  removeFromCart,
  cartCount,
  placeOrder,
}) {
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
      {confirm && <Confirmation message="Item Removed from Cart" />}
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        style={styles.container}
      >
        {cart.items && (
          <>
            <Pressable onPress={placeOrder} style={commonStyles.btnSmall}>
              <Text style={{ fontWeight: "bold" }}>Place Order</Text>
            </Pressable>
            <Text style={{ fontWeight: "bold" }}>
              {`Subtotal (${cartCount} items): `}
              {`${cart.Total || "$0.00"}`}
            </Text>
          </>
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
              showConfirmScreen={showConfirmScreen}
              key={i}
            />
          );
        })}
        {!cart.items && (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              width: "60%",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Your Shopping Cart is Empty. Fill it with goodies that you love!
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    flexDirection: "column",
  },
});
