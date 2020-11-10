/**
 * Basic You.i RN app
 */
import React from "react";
import { AppRegistry, StyleSheet, View } from "react-native";
import App from "./src/App";
import { Provider } from "react-redux";
import initStore from "./src/store";

const YiReactApp = () => {
  return (
    <Provider store={initStore()}>
      <View style={styles.mainContainer}>
        <App />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#e6e7e7",
    flex: 1,
  },
});

AppRegistry.registerComponent("YiReactApp", () => YiReactApp);
