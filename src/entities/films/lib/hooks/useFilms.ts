import { useEffect, useState } from 'react';
import { getNowPlayingFilms } from '../../api/filmsApi';
import { FilmDataResponse, IFilm } from '../../model/types';

export const useFilms = (currentPage: number): FilmDataResponse => {
  const [films, setFilms] = useState<IFilm[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);

  const loadFilms = async (currentPage: number) => {
    const { results, total_pages } = await getNowPlayingFilms(currentPage);
    setFilms(results);
    setTotalPages(total_pages);
  };

  useEffect(() => {
    loadFilms(currentPage);
  }, [currentPage]);

  return { results: films, total_pages: totalPages };
};
