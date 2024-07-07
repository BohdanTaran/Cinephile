export interface IPaginationProps {
  total_pages: number;
  currentPage: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  handlePageClick: (page: number) => void;
}

export interface IFilters {
  page: number;
}
