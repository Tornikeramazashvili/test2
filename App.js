import React from "react";
import StackNavigator from "./Navigation/StackNavigator";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StackNavigator />
        </PersistGate>
      </Provider>
    </>
  );
}
