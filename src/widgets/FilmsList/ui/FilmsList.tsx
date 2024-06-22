import { FilmCard } from '../../../entities/films';
import { IFilm } from '../../../entities/films/model/types';
import { IGenre } from '../../../shared/ui/Genres/model/types';

interface Props {
  films?: IFilm[];
  genres: IGenre[];
}

export const FilmsList = ({ films, genres }: Props) => {
  return (
    <>
      {films?.map((film) => {
        return <FilmCard key={film.id} genres={genres} film={film} />;
      })}
    </>
  );
};
