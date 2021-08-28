import React, { useState } from "react";
import { NativeRouter, Switch, Route } from "react-router-native";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  View, StatusBar
} from "react-native";
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";
import { shopApiInstance } from "./network";
import Login from "./Login";
import Register from "./Register";
import Catalogue from "./Catalogue";


export default function App({ history }) {


  function handleLogin(params) {
    console.log(params);
    shopApiInstance
      .post("/users/signin", params)
      .then((response) => {
        console.log(response.data);
        history.push("/products");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
   <SafeAreaView style={{
     marginTop: StatusBar.currentHeight,
     backgroundColor: 'white',
     flex: 1,
     flexDirection: 'row',
     flexWrap: 'wrap',
     alignContent: 'center',
     justifyContent: 'center', //main-axis
     alignItems: 'center' //cross-axis
   }}>
     <View style={{
       backgroundColor: 'dodgerblue',
       width: 100,
       height: 100,
       alignSelf: 'center'
       }}/>
     <View style={{
       backgroundColor: 'lightgreen',
       width: 100,
       height: 100
       }}/>
     <View style={{
       backgroundColor: 'gold',
       width: 100,
       height: 100
       }}/>
     <View style={{
       backgroundColor: 'grey',
       width: 100,
       height: 100
       }}/>
     <View style={{
       backgroundColor: 'purple',
       width: 100,
       height: 100
       }}/>
   </SafeAreaView>
  );
}



{
  /* <NativeRouter>
      <SafeAreaView style={styles.container}>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Login {...props} handleLogin={handleLogin} />}
          />
          <Route path="/register" render={(props) => <Register {...props} />} />
          <Route path="/products" component={Catalogue} />
        </Switch>
      </SafeAreaView>
    </NativeRouter> */
}
