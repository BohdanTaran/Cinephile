import { AdultWarning } from '../../../shared/ui/AdultWarning';
import { IGenre } from '../../../shared/ui/Genres/model/types';
import { Genres } from '../../../shared/ui/Genres/ui/Genres';
import { IFilm } from '../model/types';
import styles from './FilmCard.module.css';

interface Props {
  film: IFilm;
  genres: IGenre[];
}

const BASE_IMAGE_URL = import.meta.env.VITE_BASE_IMAGE_URL;

export const FilmCard = ({ film, genres }: Props) => {
  return (
    <div className={styles.poster}>
      <img className={styles.img} src={`${BASE_IMAGE_URL}${film.poster_path}`} alt={film.title} />
      <div className={styles.filmCard_description}>
        <div className={styles.sub_title}>
          {film.adult && <AdultWarning />}
          <Genres genres={genres} film={film} />
        </div>
        <span className={styles.title}>{film.original_title}</span>
      </div>
    </div>
  );
};
