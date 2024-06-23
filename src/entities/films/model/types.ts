export interface IFilm {
  id: number;
  adult: boolean;
  false: boolean;
  genre_ids: number[];
  backdrop_path: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface FilmDataResponse {
  results: IFilm[];
  total_pages: number;
}
