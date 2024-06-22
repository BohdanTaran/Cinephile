import { useEffect, useState } from 'react';
import { getGenresList } from '../../api/genresApi';
import { IGenre } from '../../model/types';

export const useGenres = () => {
  const [genres, setGenres] = useState<IGenre[]>([]);

  useEffect(() => {
    const loadGenres = async () => {
      const genres = await getGenresList();
      setGenres(genres);
    };

    loadGenres();
  }, []);

  return genres;
};
