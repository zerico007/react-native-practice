import React from "react";
import { StyleSheet, SafeAreaView, Image, Pressable, View, Text } from "react-native";

export default function Product({item}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
      style={{borderRadius: 10}}
        source={{
          uri: "https://picsum.photos/200/300",
          height: 150,
          width: 150,
        }}
      />
      <View style={styles.buttons}>
          <Text style={{marginBottom: 10}}>{item}</Text>
          <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Price: $10.00</Text>
          <Pressable style={styles.button}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Add to Cart</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Video</Text>
          </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    borderWidth: 1,
    backgroundColor: "white",
    alignItems: 'center',
    height: 200,
    borderRadius: 10,
    margin: 20
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
    marginBottom: 15
  },
});
