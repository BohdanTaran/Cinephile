import { useEffect, useState } from 'react';
import { getNowPlayingFilms } from '../../api/filmsApi';

export const useFilms = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const loadFilms = async () => {
      const films = await getNowPlayingFilms();
      setFilms(films);
    };

    loadFilms();
  }, []);

  return films;
};
