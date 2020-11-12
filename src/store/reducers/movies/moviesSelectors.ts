import { RootState } from "../index";

export const moviesByCategory = (state: RootState) =>
  state.movies.moviesByCategory;

export const moviesPending = (state: RootState) => state.movies.isPending;

export const moviesError = (state: RootState) => state.movies.isError;
