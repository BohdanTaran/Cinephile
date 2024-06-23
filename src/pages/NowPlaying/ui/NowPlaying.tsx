import { useState } from 'react';
import { useFilms } from '../../../entities/films/lib/hooks/useFilms';
import { useGenres } from '../../../shared/ui/Genres/lib/hooks/useGenres';
import { Pagination } from '../../../shared/ui/Pagination';
import { FilmsList } from '../../../widgets/FilmsList';
import styles from './NowPlaying.module.css';

export const NowPlaying: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const films = useFilms(currentPage);
  const genres = useGenres();
  const totalPages = films.total_pages;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_films}>
          <FilmsList films={films.results} genres={genres} />
        </div>
        <Pagination
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          handlePageClick={handlePageClick}
          total_pages={totalPages}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};
