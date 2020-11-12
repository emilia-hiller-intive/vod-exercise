import React, { FC } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import {
  moviesByCategory,
  moviesError,
  moviesPending,
} from "../store/reducers/movies/moviesSelectors";
import Category from "../components/Category";
import { MoviesByCategory } from "../types/movies";
import ActivityIndicator from "../components/ActivityIndicator";
import ErrorScreen from "./ErrorScreen";

const LandingScreen: FC = () => {
  const movies = useSelector(moviesByCategory);
  const isPending = useSelector(moviesPending);
  const isError = useSelector(moviesError);

  const renderItem = ({ item }: { item: MoviesByCategory }) => (
    <Category movies={item} />
  );

  if (isPending) {
    return <ActivityIndicator />;
  }

  if (isError) {
    return (
      <ErrorScreen message="Sorry, an error occurred. Movies could not be loaded." />
    );
  }

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <FlatList data={movies} renderItem={renderItem} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#414141",
    width: "100%",
    padding: 20,
  },
});

export default LandingScreen;
