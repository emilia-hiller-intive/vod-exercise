import { combineReducers } from "@reduxjs/toolkit";
import movies from "./movies/moviesReducer";

const rootReducer = combineReducers({
  movies,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
