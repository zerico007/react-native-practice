import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  View,
  Text,
  Alert,
} from "react-native";
import commonStyles from "./Styles";

export default function Product({
  img_url,
  price,
  title,
  addToCart,
  id,
  videoURL,
  showConfirmScreen,
}) {
  const [showVideo, setShowVideo] = React.useState(false);

  function addToCartPopUp() {
    Alert.prompt(
      "Add to Cart",
      "How many would you like to add?",
      (text) => handleAddToCart(+text),
      "plain-text",
      "",
      "numeric"
    );
  }

  async function handleAddToCart(quantity) {
    const params = { product: id, quantity };
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
      <Image
        style={{ borderRadius: 10 }}
        source={{
          uri: img_url,
          height: 150,
          width: 150,
        }}
      />
      <View style={styles.buttons}>
        <Text style={{ marginBottom: 10 }}>{title}</Text>
        <Text style={{ marginBottom: 10, fontWeight: "bold" }}>
          {`Price: $${price}.00`}
        </Text>
        <Pressable onPress={addToCartPopUp} style={commonStyles.btnSmall}>
          <Text style={styles.shadow}>Add to Cart</Text>
        </Pressable>
        <Pressable
          onPress={() => setShowVideo(true)}
          style={commonStyles.btnSmall}
        >
          <Text style={{ fontWeight: "bold" }}>Video</Text>
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
  shadow: {
    fontWeight: "bold",
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
