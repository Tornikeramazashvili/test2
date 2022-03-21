import { applyMiddleware, createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import thunk from "redux-thunk";
import { cartReducers } from "../redux/cartReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const reducer = combineReducers({
  mycart: persistReducer(persistConfig, cartReducers),
});

export const store = createStore(reducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
