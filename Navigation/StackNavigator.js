import { createStackNavigator } from "@react-navigation/stack";
import ProductsList from "../Components/ProductsList";
import { NavigationContainer } from "@react-navigation/native";
import MainContainer from "./MainContainer";
import ProductsDetail from "../Components/ProductsDetail";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainContainer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Products"
          component={ProductsList}
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="About product"
          component={ProductsDetail}
          options={{ headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
