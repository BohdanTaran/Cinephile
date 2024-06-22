import { IFilm } from '../../../../entities/films/model/types';
import { extractGenres } from '../lib/helpers/extractGenres';
import { IGenre } from '../model/types';

interface Props {
  genres: IGenre[];
  film: IFilm;
}

export const Genres = ({ genres, film }: Props) => {
  return <span className="text-cp-1 text-sm font-fira font-light w-4/5">{extractGenres(film, genres)}</span>;
};
