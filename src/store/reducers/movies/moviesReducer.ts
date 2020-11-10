import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoviesByCategory } from "../../../types/movies";

export interface MoviesStateType {
  moviesByCategory?: MoviesByCategory[];
  isPending: boolean;
  isError: boolean;
}

const initialState: MoviesStateType = {
  isPending: false,
  isError: false,
};

const moviesReducer = createSlice({
  name: "movies",
  initialState,

  reducers: {
    setMovies(state, { payload }: PayloadAction<MoviesByCategory[]>) {
      state.moviesByCategory = payload;
    },
    setIsPending(state, { payload }: PayloadAction<boolean>) {
      state.isPending = payload;
    },
    setIsError(state, { payload }: PayloadAction<boolean>) {
      state.isError = payload;
    },
  },
});

export const moviesActions = moviesReducer.actions;
export default moviesReducer.reducer;
