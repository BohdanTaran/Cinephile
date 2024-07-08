import { AdultWarning } from '../../../shared/ui/AdultWarning';
import { Genres } from '../../../shared/ui/Genres/ui/Genres';
import { Poster } from '../../../shared/ui/Poster';
import { IFilm } from '../model/types';
import styles from './FilmCard.module.css';

interface Props {
  film: IFilm;
}

export const FilmCard = ({ film }: Props) => {
  return (
    <div className={styles.poster}>
      <Poster path={film.poster_path} />
      <div className={styles.filmCard_description}>
        <span className={styles.title}>{film.original_title}</span>
        <div className={styles.sub_title}>
          {film.adult && <AdultWarning />}
          <Genres film={film} />
        </div>
      </div>
    </div>
  );
};
