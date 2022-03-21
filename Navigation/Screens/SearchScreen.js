import { View, Text, Button } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SearchScreen() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <View style={{ margin: 90 }}>
      <Text>{counter}</Text>
      <Button
        title="Click"
        onPress={() =>
          dispatch({
            type: "INCREMENT",
            payload: 5,
          })
        }
      />
    </View>
  );
}
