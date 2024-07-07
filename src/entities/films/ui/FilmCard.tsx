import { AdultWarning } from '../../../shared/ui/AdultWarning';
import { IGenre } from '../../../shared/ui/Genres/model/types';
import { Genres } from '../../../shared/ui/Genres/ui/Genres';
import { Poster } from '../../../shared/ui/Poster';
import { IFilm } from '../model/types';
import styles from './FilmCard.module.css';

interface Props {
  film: IFilm;
  genres: IGenre[];
}

export const FilmCard = ({ film, genres }: Props) => {
  return (
    <div className={styles.poster}>
      <Poster path={film.poster_path} />
      <div className={styles.filmCard_description}>
        <span className={styles.title}>{film.original_title}</span>
        <div className={styles.sub_title}>
          {film.adult && <AdultWarning />}
          <Genres genres={genres} film={film} />
        </div>
      </div>
    </div>
  );
};
