import { useState } from 'react';
import { useFilms } from '../../../entities/films/lib/hooks/useFilms';
import { GenresContext } from '../../../shared/contexts/GenresContext';
import { useGenres } from '../../../shared/ui/Genres/lib/hooks/useGenres';
import { Pagination } from '../../../shared/ui/Pagination';
import { usePagination } from '../../../shared/ui/Pagination/lib/hooks/usePagination';
import { FilmsList } from '../../../widgets/FilmsList';
import styles from './NowPlaying.module.css';

export const NowPlaying: React.FC = () => {
  const [filters, setFilters] = useState({ page: 1 });
  const { films, totalPages } = useFilms(filters.page);
  const genres = useGenres();

  const changeFilter = (key: string, value: unknown) => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const { handleNextPage, handlePrevPage, handlePageClick } = usePagination(
    filters,
    totalPages,
    changeFilter,
  );

  return (
    <GenresContext.Provider value={genres}>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <div className={styles.wrapper_films}>
            <FilmsList films={films} />
          </div>
          <Pagination
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            handlePageClick={handlePageClick}
            total_pages={totalPages}
            currentPage={filters.page}
          />
        </div>
      </div>
    </GenresContext.Provider>
  );
};
