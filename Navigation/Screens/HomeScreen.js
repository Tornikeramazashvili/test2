import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Carousel from "../../Components/Carousel";

export default function HomeScreen({ navigation }) {
  return (
    <>
      <ScrollView>
        {/* <View style={styles.TopSectionChooseCityContainer}>
          <ImageBackground
            source={require("../../Images/location.png")}
            style={styles.TopSectionLocationIcon}
          />
          <Text style={styles.TopSectionChooseCityText}>აირჩიეთ ქალაქი</Text>
          <ImageBackground
            source={require("../../Images/dropdown.png")}
            style={styles.TopSectionDropdownIcon}
          />
        </View> */}
        <View style={styles.TopSectionScrollView}>
          <View style={styles.TopSectionView}>
            <ImageBackground
              source={require("../../Images/PSPicon.png")}
              style={styles.TopSectionPSPIcon}
            />
            <View style={styles.TopSectionSearch}>
              <Feather
                name="search"
                size={23}
                color="#565656"
                style={({ position: "relative" }, { right: 70 })}
              />
              <TextInput
                placeholder="ძიება"
                style={styles.TopSectionSearchText}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <ImageBackground
                source={require("../../Images/addCart.png")}
                style={styles.TopSectionShoppingCart}
              />
              <Text style={styles.cartCount}>0</Text>
            </View>
          </View>
        </View>
        <View>
          <ImageBackground
            source={require("../../Images/colorfulLine.png")}
            style={styles.TopSectionColorfulLine}
          />
        </View>
        <View style={styles.TopSectionCategoriesView}>
          <View style={styles.TopSectionCategoriesSale}>
            <Carousel />
          </View>
          <TouchableOpacity style={styles.TopSectionCategoriesGreen}>
            <Text style={styles.TopSectionCategoriesGreenText}>აფთიაქი</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TopSectionCategoriesYellow}>
            <Text style={styles.TopSectionCategoriesYellowText}>
              ოჯახზე ზრუნვა
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TopSectionCategoriesPink}>
            <Text style={styles.TopSectionCategoriesPinkText}>სილამაზე</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.MiddleSectionTopProductsView}>
          <View style={styles.MiddleSectionTopProductsLeftSide}>
            <ImageBackground
              source={require("../../Images/Star.png")}
              style={styles.MiddleSectionTopProductsStar}
            />
            <Text style={styles.MiddleSectionTopProductsLeftSideText}>
              ყველაზე პოპულარული
            </Text>
          </View>
          <View style={styles.MiddleSectionTopProductsRightSide}>
            <Text style={styles.MiddleSectionTopProductsRightText}>სრულად</Text>
            <ImageBackground
              source={require("../../Images/leftArrow.png")}
              style={styles.MiddleSectionTopProductsArrow}
            />
            <ImageBackground
              source={require("../../Images/rightArrow.png")}
              style={styles.MiddleSectionTopProductsArrow}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  TopSectionChooseCityContainer: {
    marginTop: 20,
    // backgroundColor: "#E9E7EC",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
  },
  TopSectionLocationIcon: {
    width: 18,
    height: 18,
  },
  TopSectionChooseCityText: {
    fontSize: 12,
    marginLeft: 5,
  },
  TopSectionDropdownIcon: {
    width: 9,
    height: 9,
    marginLeft: 5,
  },
  TopSectionScrollView: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    marginTop: 20,
  },
  TopSectionView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  TopSectionPSPIcon: {
    width: 48,
    height: 48,
  },
  TopSectionText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  TopSectionShoppingCart: {
    width: 40,
    height: 40,
  },
  TopSectionSearch: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#E5E7F1",
    borderWidth: 1,
    borderRadius: 68,
    paddingHorizontal: 80,
    paddingVertical: 5,
  },
  TopSectionColorfulLine: {
    height: 1,
    marginTop: 12,
  },
  TopSectionCategoriesView: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  TopSectionCategoriesGreen: {
    backgroundColor: "#65A330",
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  TopSectionCategoriesGreenText: {
    fontSize: 14,
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  TopSectionCategoriesYellow: {
    backgroundColor: "#E7B300",
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  TopSectionCategoriesYellowText: {
    fontSize: 14,
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  TopSectionCategoriesPink: {
    backgroundColor: "#C6017F",
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  TopSectionCategoriesPinkText: {
    fontSize: 14,
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  TopSectionCategoriesSale: {
    marginTop: 16,
    marginBottom: 8,
  },
  TopSectionSearchText: {
    position: "absolute",
    paddingLeft: 40,
  },
  MiddleSectionTopProductsView: {
    paddingLeft: 16,
    paddingTop: 10,
    flexDirection: "row",
  },
  MiddleSectionTopProductsStar: {
    width: 32,
    height: 32,
  },
  MiddleSectionTopProductsLeftSide: {
    flexDirection: "row",
    alignItems: "center",
  },
  MiddleSectionTopProductsLeftSideText: {
    fontSize: 11,
    fontWeight: "bold",
    paddingLeft: 6,
  },
  MiddleSectionTopProductsArrow: {
    width: 33,

    height: 33,
  },
  MiddleSectionTopProductsRightSide: {
    width: "100%",
    marginLeft: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  MiddleSectionTopProductsRightText: {
    fontSize: 11,
    marginRight: 3,
    color: "#253988",
  },
  cartCount: {
    fontSize: 10,
    backgroundColor: "#65A330",
    color: "white",
    padding: 2,
    width: 18,
    textAlign: "center",
    borderRadius: 40,
    position: "absolute",
    left: 30,
  },
  cartCount: {
    fontSize: 10,
    backgroundColor: "#183a7d",
    color: "white",
    padding: 2,
    width: 18,
    textAlign: "center",
    borderRadius: 40,
    position: "absolute",
    left: 30,
  },
});
