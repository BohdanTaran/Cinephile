import { IFilm } from '../../../../../entities/films/model/types';
import { IGenre } from '../../model/types';

export const extractGenres = (film: IFilm, genres: IGenre[]) => {
  return film.genre_ids.map((gId) => genres.find((g) => g.id === gId)?.name).join(', ');
};
