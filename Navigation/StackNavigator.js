import { createStackNavigator } from '@react-navigation/stack';
import ProductsList from "../Components/ProductsList";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./Screens/HomeScreen";
import MainContainer from "./MainContainer";

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
                <Stack.Screen name="ProductList" component={ProductsList}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator