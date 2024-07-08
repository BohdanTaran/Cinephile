import { useContext } from 'react';
import { IFilm } from '../../../../entities/films/model/types';
import { GenresContext } from '../../../contexts/GenresContext';
import { extractGenres } from '../lib/helpers/extractGenres';

interface Props {
  film: IFilm;
}

export const Genres = ({ film }: Props) => {
  const genres = useContext(GenresContext);

  return (
    <span className="text-cp-1 text-sm font-fira font-light w-4/5">
      {extractGenres(film, genres)}
    </span>
  );
};
