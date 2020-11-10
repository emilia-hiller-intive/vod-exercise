import { all } from "redux-saga/effects";
import { getMoviesSaga } from "./reducers/movies/moviesSagas";

function* rootSaga() {
  yield all([getMoviesSaga()]);
}

export default rootSaga;
