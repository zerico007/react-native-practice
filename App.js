import React, { useState } from "react";
import { Vibration } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import jwt_decode from "jwt-decode";
import { shopApiInstance, setBearerToken } from "./network";
import Login from "./Login";
import Register from "./Register";
import AppContainer from "./Container";

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [cartCount, setCartCount] = useState(0);
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    const count = cart.items
      ? cart.items.reduce((acc, item) => acc + item.quantity, 0)
      : 0;
    setCartCount(count);
  }, [cart]);

  const getProducts = () => {
    shopApiInstance
      .get("/products")
      .then((response) => {
        setProducts(response.data.products.reverse());
      })
      .catch((err) => console.log("error", err));
  };

  const getCart = () => {
    shopApiInstance
      .get("/cart")
      .then((response) => {
        response.data.message ? setCart({}) : setCart(response.data);
      })
      .catch((err) => console.log(err));
  };

  const assignOrders = (response) => {
    response.data.orders
      ? setOrders(response.data.orders.reverse())
      : setOrders([]);
  };

  const getAdminOrders = () => {
    shopApiInstance
      .get("/orders/admin")
      .then((response) => {
        assignOrders(response);
      })
      .catch((err) => console.log(err));
  };

  const getOrders = () => {
    shopApiInstance
      .get("/orders")
      .then((response) => {
        assignOrders(response);
      })
      .catch((err) => console.log(err));
  };

  const getUser = (token) => {
    const loggedInUser = jwt_decode(token);
    const { username, email, role, password, userId } = loggedInUser;
    setUser({ username, email, role, password, userId });
  };

  const addToCart = (params) => {
    return new Promise((resolve, reject) => {
      shopApiInstance
        .post("/cart", params)
        .then((response) => {
          console.log("item added to cart");
          getCart();
          resolve(response.data);
        })
        .catch((err) => {
          console.log("addToCart", err);
          reject(err);
        });
    });
  };

  const updateCart = (params) => {
    shopApiInstance
      .put("/cart/update", params)
      .then((response) => {
        console.log("item in cart updated");
        getCart();
      })
      .catch((err) => {
        console.log("update Cart", err);
      });
  };

  const removeFromCart = (params) => {
    return new Promise((resolve, reject) => {
      shopApiInstance
        .put("/cart/remove", params)
        .then((response) => {
          console.log("item removed from cart");
          getCart();
          resolve(response.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };

  const placeOrder = () => {
    shopApiInstance
      .post("/orders")
      .then((response) => {
        console.log("order placed");
        Vibration.vibrate();
        getCart();
        user.role === "administrator" ? getAdminOrders() : getOrders();
        alert("Order successfully placed!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRegister = (params) => {
    return new Promise((resolve, reject) => {
      shopApiInstance
        .post("/users/signup", params)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  function handleLogin(params) {
    return new Promise((resolve, reject) => {
      setLoading(true);
      shopApiInstance
        .post("/users/signin", params)
        .then((response) => {
          setAuthenticated(true);
          setBearerToken(response.data.token);
          getProducts();
          getCart();
          getUser(response.data.token);
          user.role === "administrator" ? getAdminOrders() : getOrders();
          setLoading(false);
          resolve(response.data);
        })
        .catch((err) => {
          console.log("error", err.message);
          setLoading(false);
          reject(err);
        });
    });
  }

  function handleLogout() {
    setAuthenticated(false);
    setProducts([]);
    setOrders([]);
    setUser({});
    setCart({});
    setCartCount(0);
    setBearerToken("");
  }

  const Stack = createNativeStackNavigator();

  const headerOptions = {
    headerStyle: {
      backgroundColor: "#253951",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={headerOptions}>
        <Stack.Screen name="Login">
          {(props) => (
            <Login {...props} handleLogin={handleLogin} loading={loading} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Register">
          {(props) => <Register {...props} handleRegister={handleRegister} />}
        </Stack.Screen>
        <Stack.Screen name="Apple Shop">
          {(props) => (
            <AppContainer
              {...props}
              cartCount={cartCount}
              cart={cart}
              orders={orders}
              user={user.username}
              addToCart={addToCart}
              updateCart={updateCart}
              handleLogout={handleLogout}
              products={products}
              placeOrder={placeOrder}
              removeFromCart={removeFromCart}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
