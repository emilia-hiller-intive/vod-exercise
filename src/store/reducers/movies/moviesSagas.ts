import { call, put, takeLatest } from "redux-saga/effects";
import actions from "../../actions";
import { runGetAllMovies, runGetCategories } from "../../../helpers";

export function* runGetMovies() {
  yield put(actions.movies.setIsPending(true));

  const response = yield call(runGetCategories);

  const { isError, data } = response;

  if (isError || !data) {
    yield put(actions.movies.setIsError(true));
  } else {
    const moviesResponse = yield call(runGetAllMovies, data.data);
    yield put(actions.movies.setMovies(moviesResponse));
  }

  yield put(actions.movies.setIsPending(false));
}

export function* getMoviesSaga() {
  yield takeLatest(actions.moviesSaga.getMovies, runGetMovies);
}
