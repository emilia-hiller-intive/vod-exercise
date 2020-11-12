import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

export interface ErrorProps {
  message: string;
}

const Error: FC<ErrorProps> = ({ message }) => {
  return (
    <View>
      <Text style={styles.error}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    color: "#d21f1f",
    fontSize: 20,
  },
});

export default Error;
