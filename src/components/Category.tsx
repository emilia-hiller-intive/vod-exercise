import React, { FC } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Animated,
} from "react-native";
import { MoviesByCategory, MovieType } from "../types/movies";
import Poster from "./Poster";
import Error from "./Error";

interface Props {
  movies: MoviesByCategory;
}

const Category: FC<Props> = ({ movies }) => {
  const renderItem = ({ item }: { item: MovieType }) => {
    return <Poster thumbnail={item.image} movieTitle={item.title} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{movies.category.title}</Text>
      </View>
      {movies.isError ? (
        <Error
          message={`Sorry, an error occured. Movies could not be loaded.`}
        />
      ) : (
        <ScrollView horizontal={true}>
          <FlatList
            style={styles.list}
            data={movies.movies}
            renderItem={renderItem}
          />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  titleContainer: {
    paddingTop: 5,
    paddingBottom: 10,
  },
  title: {
    color: "#ea37bd",
    fontSize: 20,
  },
  list: {
    flexDirection: "row",
  },
});

export default Category;
