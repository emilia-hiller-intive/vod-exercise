/**
 * Basic You.i RN app
 */
import React from "react";
import { AppRegistry, StyleSheet, View } from "react-native";
import App from "./src/App";

const YiReactApp = () => {
  return (
    <View style={styles.mainContainer}>
      <App />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#e6e7e7",
    flex: 1,
  },
});

AppRegistry.registerComponent("YiReactApp", () => YiReactApp);
