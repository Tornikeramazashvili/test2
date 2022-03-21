import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (value) => {
  await AsyncStorage.setItem("@test", value);
};

export const removeData = async () => {
  await AsyncStorage.removeItem("@test");
};
