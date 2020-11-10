import { CategoryType } from "./categories";

export interface MovieType {
  id: string;
  video: string;
  image: string;
  description: string;
  title: string;
}

export interface MovieTypeResponseType {
  data: MovieType[];
}

export interface MoviesByCategory {
  movies: MovieType[];
  isError?: boolean;
  category: CategoryType;
}
