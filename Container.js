import React from "react";
import { Button, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import Cart from "./Cart";
import Catalogue from "./Catalogue";
import Orders from "./Orders";

const Tab = createBottomTabNavigator();

export default function AppContainer({
  navigation,
  handleLogout,
  products,
  cartCount,
  addToCart,
  updateCart,
  removeFromCart,
  placeOrder,
  cart,
  user,
  orders,
}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Logout"
          color="white"
          onPress={() => {
            handleLogout();
            navigation.navigate("Login");
          }}
        />
      ),
      headerLeft: () => <Text style={{ color: "#fff" }}>{user}</Text>,
    });
  }, [navigation]);
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Catalogue"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Shopping Cart") {
              iconName = "shopping-cart";
            } else if (route.name === "Catalogue") {
              iconName = "apple";
            } else if (route.name === "Orders") {
              iconName = "box-open";
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Catalogue">
          {(props) => (
            <Catalogue {...props} addToCart={addToCart} products={products} />
          )}
        </Tab.Screen>
        <Tab.Screen name="Shopping Cart" options={{ tabBarBadge: cartCount }}>
          {(props) => (
            <Cart
              {...props}
              cart={cart}
              removeFromCart={removeFromCart}
              updateCart={updateCart}
              placeOrder={placeOrder}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Orders">
          {(props) => (
            <Orders {...props} orders={orders} addToCart={addToCart} />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
