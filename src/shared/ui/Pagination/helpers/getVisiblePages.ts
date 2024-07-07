export const getVisiblePages = (currentPage: number, total_pages: number) => {
  const visiblePages = 7;
  let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  let endPage = startPage + visiblePages - 1;

  if (endPage > total_pages) {
    endPage = total_pages;
    startPage = Math.max(1, endPage - visiblePages + 1);
  }

  return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
};
