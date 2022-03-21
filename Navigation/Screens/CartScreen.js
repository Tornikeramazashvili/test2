import { View, Text } from "react-native";
import React from "react";
import {useSelector} from "react-redux";

export default function CartScreen() {

    const mycart = useSelector(state => state.mycart)

    return (
    <>
      <View style={{ margin: 50 }}>
          {mycart?.cartItems.map(cart => (
             <View style={{
                 display:'flex',
             }}>
                 <View>
                     <Text>{cart.ProductName.substr(0,20)}</Text>
                 </View>
                 <View>
                     <Text>{cart.quantity}</Text>
                 </View>
             </View>
          ))}
      </View>
    </>
  );
}
