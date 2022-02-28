import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import CategoryList from "../../Components/CategoryList";

export default function CategoriesScreen({ navigation }) {
  useEffect(() => {
    CategoryList;
  }, []);
  return (
    <View style={{ marginTop: 20 }}>
      <CategoryList />
    </View>
  );
}
