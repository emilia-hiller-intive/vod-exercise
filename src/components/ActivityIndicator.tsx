import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const ActivityIndicator: FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.loading}>Loading...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ea37bd",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  loading: {
    color: "#fff",
    fontSize: 20,
  },
});

export default ActivityIndicator;
