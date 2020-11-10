import { moviesActions } from "./reducers/movies/moviesReducer";
import moviesSagaActions from "./reducers/movies/moviesSagaActions";

const actions = {
  movies: moviesActions,
  moviesSaga: moviesSagaActions,
};

export default actions;
