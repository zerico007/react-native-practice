import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Vibration,
  FlatList,
} from "react-native";
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

  const renderItem = ({ item }) => (
    <Product
      img_url={item.productImage && `${IMAGES_URL}/${item.productImage}`}
      addToCart={addToCart}
      showConfirmScreen={showConfirmScreen}
      title={item.name}
      price={item.price}
      videoURL={item.videoURL}
      id={item.id}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {confirm && <Confirmation message="Item Added to Cart" />}
      <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      style={styles.container}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
