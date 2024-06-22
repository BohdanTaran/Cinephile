import { useFilms } from '../../../entities/films/lib/hooks/useFilms';
import { useGenres } from '../../../shared/ui/Genres/lib/hooks/useGenres';
import { FilmsList } from '../../../widgets/FilmsList';
import styles from './NowPlaying.module.css';

export const NowPlaying: React.FC = () => {
  const films = useFilms();
  const genres = useGenres();

  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_films}>
          <FilmsList films={films} genres={genres} />
        </div>
      </div>
    </div>
  );
};
