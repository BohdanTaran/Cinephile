import { AdultWarning } from '../../../shared/ui/AdultWarning';
import { Genres } from '../../../shared/ui/Genres/ui/Genres';
import { Poster } from '../../../shared/ui/Poster';
import { IFilm } from '../model/types';

interface Props {
  film: IFilm;
}

export const FilmCard = ({ film }: Props) => {
  return (
    <div
      className="flex flex-row text-white text-lg font-fira font-light
          xs:w-full mt-4
          lg:mb-4 lg:flex-col"
    >
      <Poster path={film.poster_path} />
      <div
        className="xs:ml-1 w-full
          lg:ml-0
          xl:w-11/12"
      >
        <span className="">{film.original_title}</span>
        <div
          className="xs:leading-4
          sm:w-full
          lg:w-5/6"
        >
          {film.adult && <AdultWarning />}
          <Genres film={film} />
        </div>
      </div>
    </div>
  );
};
