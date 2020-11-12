import React, { FC, useRef } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Animated,
  TouchableOpacity,
} from "react-native";
import {
  NavigationInjectedProps,
  withNavigation,
} from "react-navigation";
import { ROUTE_PATHS } from "../consts";

interface Props {
  thumbnail: string;
  movieTitle: string;
}

const ANIMATION_DURATION = 600;

const Poster: FC<Props & NavigationInjectedProps> = ({
  thumbnail,
  movieTitle,
  navigation,
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleLoaded = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: ANIMATION_DURATION,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = () => {
    navigation.navigate(ROUTE_PATHS.PLAYER);
  };

  return (
    <Animated.View style={{ opacity: fadeAnim }} onLayout={handleLoaded}>
      <TouchableOpacity onPress={handlePress}>
        <Image style={styles.image} source={{ uri: thumbnail }} />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {movieTitle}
        </Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 200,
    marginRight: 20,
    marginBottom: 10,
  },
  title: {
    color: "#fff",
  },
  titleContainer: {
    width: 150,
  },
});

export default withNavigation(Poster);
