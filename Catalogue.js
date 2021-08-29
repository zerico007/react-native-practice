import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Vibration } from "react-native";
import Product from "./Product";
import { IMAGES_URL } from "./network";
import Confirmation from "./Confirmation";

export default function Catalogue({ products, addToCart }) {
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
      {confirm && <Confirmation message="Item Added to Cart" />}
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
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
              showConfirmScreen={showConfirmScreen}
              title={product.name}
              price={product.price}
              id={product.id}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
