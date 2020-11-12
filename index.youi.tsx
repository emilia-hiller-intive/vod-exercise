/**
 * Basic You.i RN app
 */
import React from "react";
import { AppRegistry } from "react-native";
import App from "./src/App";
import { Provider } from "react-redux";
import initStore from "./src/store";

const YiReactApp = () => {
  return (
    <Provider store={initStore()}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent("YiReactApp", () => YiReactApp);
