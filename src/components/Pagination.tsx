import React from 'react';

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`px-3 py-1 border rounded ${
            page === i
              ? 'bg-blue-500 text-white'
              : 'hover:bg-gray-100'
          }`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex flex-col items-center space-y-2 mt-4">
      <div className="flex items-center space-x-2">
        <button
          className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
          onClick={() => onPageChange(1)}
          disabled={page === 1}
          aria-label="First page"
        >
          ««
        </button>
        <button
          className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          aria-label="Previous page"
        >
          «
        </button>
        {renderPageNumbers()}
        <button
          className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          aria-label="Next page"
        >
          »
        </button>
        <button
          className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
          onClick={() => onPageChange(totalPages)}
          disabled={page === totalPages}
          aria-label="Last page"
        >
          »»
        </button>
      </div>
      <div className="text-sm text-gray-600">
        Page {page} of {totalPages}
      </div>
    </div>
  );
};

export default Pagination; 