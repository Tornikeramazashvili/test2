import React, { useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CategoryList({ categoryList, children }) {
  const [arrayChild, setArrayChild] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState(false);

  const navigation = useNavigation();

  const openCategoryHandler = () => {
    setArrayChild(children);
    setSubCategoryList(!subCategoryList);
  };

  return (
    <>
      <ScrollView keyboardShouldPersistTaps="always">
        <TouchableOpacity
          onPress={() => openCategoryHandler()}
          activeOpacity={0.5}
          style={styles.button}>
          <Text style={styles.text}>{categoryList}</Text>
        </TouchableOpacity>
        {subCategoryList
          ? arrayChild.map((sub, index) => {
              return (
                <View key={index}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.SubButton}
                    onPress={() =>
                      navigation.navigate("პროდუქტები", {
                        categoryId: sub.uid,
                      })
                    }
                  >
                    <Text style={styles.SubText}>{sub.name}</Text>
                  </TouchableOpacity>
                </View>
              );
            })
          : null}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 3.5,
    marginBottom: 1.5,
    borderBottomWidth: 0.4,
    borderBottomColor: "#D0D0D0",
    borderRadius: 20,
  },
  text: {
    color: "black",
    fontSize: 13,
  },
  SubButton: {
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 2.5,
    marginBottom: 1.5,
    borderBottomWidth: 0.5,
    borderBottomColor: "#D0D0D0",
    borderRadius: 20,
  },
  SubText: {
    color: "black",
    fontSize: 12,
    paddingLeft: 8,
  },
});
