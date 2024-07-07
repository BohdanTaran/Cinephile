import { IFilters } from '../../model/types';

export const usePagination = (
  filters: IFilters,
  totalPages: number,
  changeFilter: (param: string, page: number) => void,
) => {
  const handleNextPage = () => {
    if (filters.page < totalPages) {
      changeFilter('page', filters.page + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevPage = () => {
    if (filters.page > 1) {
      changeFilter('page', filters.page - 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    changeFilter('page', pageNumber);
    window.scrollTo(0, 0);
  };

  return { handleNextPage, handlePrevPage, handlePageClick };
};
