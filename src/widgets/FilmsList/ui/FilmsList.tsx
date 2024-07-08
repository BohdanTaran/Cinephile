import { FilmCard } from '../../../entities/films';
import { IFilm } from '../../../entities/films/model/types';

interface Props {
  films?: IFilm[];
}

export const FilmsList = ({ films }: Props) => {
  return (
    <>
      {films?.map((film) => {
        return <FilmCard key={film.id} film={film} />;
      })}
    </>
  );
};
