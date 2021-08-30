import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  View,
  Text,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/FontAwesome5";
import ProductImage from "./ProductImage";
import commonStyles from "./Styles";

export default function CartItem({
  productId,
  image,
  title,
  price,
  quantity,
  updateCart,
  removeFromCart,
  showConfirmScreen,
}) {
  const [amount, setAmount] = React.useState(quantity);

  React.useEffect(() => {
    setAmount(quantity);
  }, [quantity]);

  const values = [1, 2, 3, 4, 5, 6];

  const handleRemoveItem = async () => {
    const params = { product: productId };
    try {
      showConfirmScreen();
      await removeFromCart(params);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProductImage img_url={image} />
      <View style={styles.buttons}>
        <Text style={{ marginBottom: 10 }}>{title}</Text>
        <Text style={{ marginBottom: 10, fontWeight: "bold" }}>
          {`Price: $${price}.00 x ${amount}`}
        </Text>
        <SelectDropdown
          data={values}
          defaultValue={amount}
          onSelect={(selectedItem, index) => {
            setAmount(selectedItem);
            const params = { product: productId, quantity: selectedItem };
            updateCart(params);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          renderDropdownIcon={() => {
            return <Icon name="chevron-down" color={"#444"} size={12} />;
          }}
          dropdownIconPosition={"right"}
          buttonStyle={styles.dropdownBtnStyle}
          buttonTextStyle={{ fontSize: 16 }}
          dropdownStyle={styles.dropdownStyle}
          rowStyle={styles.rowStyle}
        />
        <Pressable onPress={handleRemoveItem} style={commonStyles.btnSmall}>
          <Text style={{ fontWeight: "bold" }}>Remove</Text>
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
  dropdownBtnStyle: {
    width: 80,
    height: 30,
    margin: 10,
    backgroundColor: "#FFF",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#444",
  },
  dropdownStyle: {
    borderRadius: 5
  },
  rowStyle: {
    height: 35
  }
});
