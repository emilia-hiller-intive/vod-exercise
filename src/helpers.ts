import { FetchDataType } from "./services/apiService/types";
import { CategoryType } from "./types/categories";
import apiService from "./services/apiService/apiService";
import { URLS } from "./consts";
import { MoviesByCategory, MovieTypeResponseType } from "./types/movies";

export const runGetCategories = (): Promise<FetchDataType<CategoryType[]>> =>
  apiService.request({
    url: URLS.CATEGORIES,
  });

export const runGetMoviesByCategory = (
  categoryFilter: string
): Promise<FetchDataType<MovieTypeResponseType>> =>
  apiService.request({
    url: `${URLS.MOVIES}${categoryFilter}`,
  });

export const runGetAllMovies = (
  categories: CategoryType[]
): Promise<MoviesByCategory[]> => {
  return Promise.all(
    categories.map(async (category) => {
      const moviesByCategory = await runGetMoviesByCategory(category.filter);

      const { isError, data } = moviesByCategory;

      return {
        movies: data.data,
        isError,
        category: category,
      };
    })
  );
};
