import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import Error, { ErrorProps } from "../components/Error";

const ErrorScreen: FC<ErrorProps> = ({ message }) => {
  return (
    <View style={styles.container}>
      <Error message={message} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#414141",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default ErrorScreen;
