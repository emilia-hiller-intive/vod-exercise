import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import actions from "./store/actions";
import { RootStack } from "./navigation";

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.moviesSaga.getMovies());
  }, [dispatch]);

  return <RootStack />;
};

export default App;
