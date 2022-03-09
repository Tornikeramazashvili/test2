import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//Screens
import HomeScreen from "./Screens/HomeScreen";
import CategoriesScreen from "./Screens/CategoriesScreen";
import SearchScreen from "./Screens/SearchScreen";
import CartScreen from "./Screens/CartScreen";
import ProfileScreen from "./Screens/ProfileScreen";

//Screen names
const homeName = "მთავარი";
const categoriesName = "კატეგორიები";
const searchName = "ძიება";
const cartName = "კალათა";
const profileName = "პროფილი";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={HomeScreen}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === categoriesName) {
            iconName = focused ? "list" : "list-outline";
          } else if (rn === searchName) {
            iconName = focused ? "search" : "search-outline";
          } else if (rn === cartName) {
            iconName = focused ? "cart" : "cart-outline";
          } else if (rn === profileName) {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },

        // Styles to Tab navigator
        tabBarActiveTintColor: "#183a7d",
        tabBarLabelStyle: { paddingBottom: 4 },
        headerShown: false,
      })}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={categoriesName} component={CategoriesScreen} />
      <Tab.Screen name={searchName} component={SearchScreen} />
      <Tab.Screen name={cartName} component={CartScreen} />
      <Tab.Screen name={profileName} component={ProfileScreen} />
    </Tab.Navigator>
  );
}

