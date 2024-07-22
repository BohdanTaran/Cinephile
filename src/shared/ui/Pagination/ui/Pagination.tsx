import { getVisiblePages } from '../helpers/getVisiblePages';
import { IPaginationProps } from '../model/types';

export const Pagination = ({
  total_pages,
  currentPage,
  handleNextPage,
  handlePrevPage,
  handlePageClick,
}: IPaginationProps) => {
  const pages = getVisiblePages(currentPage, total_pages);

  return (
    <div
      className="bg-cp-2 rounded-md mt-4 mb-4
					xs:w-11/12 flex gap-x-2 justify-between p-1
					sm:w-7/12
					lg:w-5/12"
    >
      <button
        disabled={currentPage <= 1}
        onClick={handlePrevPage}
        className="text-cp-2 w-8 bg-cp-1 border-none rounded-md cursor-pointer disabled:bg-cp-3"
      >
        {'<'}
      </button>
      <div
        className="xs:w-full flex justify-between
					sm:w-7/12"
      >
        {pages.map((page) => {
          return (
            <button
              onClick={() => {
                handlePageClick(page);
              }}
              disabled={page === currentPage}
              className="text-white xs:p-1 disabled:text-cp-1 items-center justify-center"
              key={page}
            >
              {page}
            </button>
          );
        })}
      </div>
      <button
        disabled={currentPage >= total_pages}
        onClick={handleNextPage}
        className="text-cp-2 w-8 bg-cp-1 border-none rounded-md cursor-pointer disabled:bg-cp-3"
      >
        {'>'}
      </button>
    </div>
  );
};
