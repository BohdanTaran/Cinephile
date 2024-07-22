import { useState } from 'react';
import { useFilms } from '../../../entities/films/lib/hooks/useFilms';
import { GenresContext } from '../../../shared/contexts/GenresContext';
import { useGenres } from '../../../shared/ui/Genres/lib/hooks/useGenres';
import { Pagination } from '../../../shared/ui/Pagination';
import { usePagination } from '../../../shared/ui/Pagination/lib/hooks/usePagination';
import { FilmsList } from '../../../widgets/FilmsList';

export const NowPlaying: React.FC = () => {
  const [filters, setFilters] = useState({ page: 1 });
  const { films, totalPages } = useFilms(filters.page);
  const genres = useGenres();

  const changeFilter = (key: string, value: unknown) => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const { handleNextPage, handlePrevPage, handlePageClick } = usePagination(filters, totalPages, changeFilter);

  return (
    <GenresContext.Provider value={genres}>
      <div className="flex justify-center font-medium">
        <div
          className="bg-cp-3 grid place-items-center
        xs:w-full
        xl:w-8/12
        2xl:w-8/12"
        >
          <div
            className="grid
        sm:grid-cols-2 w-11/12 gap-x-5
        lg:grid-cols-4 lg:w-4/6
        xl:w-11/12
        2xl:grid-cols-6"
          >
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
