import React from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { Button } from "react-native";
import { StyleSheet } from "react";

export default function CategoryList({ categoryList, children }) {
  const [arrayChild, setArrayChild] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState(false);

  const openCategoryHandler = () => {
    setArrayChild(children);
    setSubCategoryList(!subCategoryList);
  };

  return (
    <View>
      <View style={{ width: 360 }}>
        <Button title={categoryList} onPress={() => openCategoryHandler()} />
      </View>
      {subCategoryList
        ? arrayChild.map((sub, index) => {
            return (
              <View key={index}>
                <Button title={sub.name} />
              </View>
            );
          })
        : null}
    </View>
  );
}
