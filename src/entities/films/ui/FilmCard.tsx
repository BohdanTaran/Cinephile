import { IFilm } from '../model/types';
import styles from './FilmCard.module.css';

interface Props {
  film: IFilm;
}

const BASE_IMAGE_URL = import.meta.env.VITE_BASE_IMAGE_URL;

export const FilmCard = ({ film }: Props) => {
  return (
    <div className={styles.poster}>
      <img className={styles.img} src={`${BASE_IMAGE_URL}${film.poster_path}`} alt={film.title} />
      <span className={styles.title}>{film.original_title}</span>
    </div>
  );
};
