import { useEffect, useState } from 'react';
import { getNowPlayingFilms } from '../../../entities/films';
import { FilmsList } from '../../../widgets/FilmsList';
import styles from './NowPlaying.module.css';

export const NowPlaying: React.FC = () => {
  const [films, setFilms] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFilms = async () => {
      const films = await getNowPlayingFilms();
      console.log(films);
      setFilms(films);
    };

    loadFilms();
  }, []);

  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_films}>
          <FilmsList films={films} />
        </div>
      </div>
    </div>
  );
};
