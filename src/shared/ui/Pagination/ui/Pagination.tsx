import { getVisiblePages } from '../helpers/getVisiblePages';
import styles from './Pagination.module.css';

interface Props {
  total_pages: number;
  currentPage: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  handlePageClick: (page: number) => void;
}

export const Pagination = ({ total_pages, currentPage, handleNextPage, handlePrevPage, handlePageClick }: Props) => {
  const pages = getVisiblePages(currentPage, total_pages);

  return (
    <div className={styles.pagination}>
      <button disabled={currentPage <= 1} onClick={handlePrevPage} className={styles.arrow}>
        {'<'}
      </button>
      <div className={styles.list}>
        {pages.map((page) => {
          return (
            <button
              onClick={() => {
                handlePageClick(page);
              }}
              disabled={page === currentPage}
              className={styles.pageNumber}
              key={page}
            >
              {page}
            </button>
          );
        })}
      </div>
      <button disabled={currentPage >= total_pages} onClick={handleNextPage} className={styles.arrow}>
        {'>'}
      </button>
    </div>
  );
};
