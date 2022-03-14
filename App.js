import "react-native-gesture-handler";
import React from "react";
import StackNavigator from "./Navigation/StackNavigator";
import CartState from "./Context/Cart/CartState";

export default function App() {
  return (
    <>
      <CartState>
        <StackNavigator />
      </CartState>
    </>
  );
}
