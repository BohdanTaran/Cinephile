import { useEffect, useState } from 'react';
import { getNowPlayingFilms } from '../../api/filmsApi';

export const useFilms = (currentPage: number) => {
  const [films, setFilms] = useState([]);

  const loadFilms = async (currentPage: number) => {
    const films = await getNowPlayingFilms(currentPage);
    setFilms(films);
  };

  useEffect(() => {
    loadFilms(currentPage);
  }, [currentPage]);

  console.log('fv', films);

  return films;
};
