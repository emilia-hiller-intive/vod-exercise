import React, { FC, useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";

import actions from "./store/actions";

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.moviesSaga.getMovies());
  }, [dispatch]);

  return (
    <View>
      <Text>APP</Text>
    </View>
  );
};

export default App;
