import React from "react";

const Pagination = ({ setCurrentPage, totalPage, currentPage }) => {
  const handleClick = (page) => {
    if(page > 0 && page < totalPage + 1 ){
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPage; i++) {
      pageNumbers.push(
        <input
          key={i}
          className="join-item btn btn-square bg-pink-400 text-black hover:text-white mx-2"
          type="radio"
          name="options"
          aria-label={i}
          onClick={() => handleClick(i)}
        />
      );
    }
    return pageNumbers;
  };

  return (
    <div className="py-9">
      <div className="join">
        <button
          className="join-item btn bg-pink-400"
          onClick={() => handleClick(+currentPage - 1)}
        >
          «
        </button>
        <div className="join">{renderPageNumbers()}</div>
        <button
          className="join-item btn bg-pink-400"
          onClick={() => handleClick(+currentPage + 1)}
        >
          »
        </button>
      </div>
    </div>
  );
};

export default Pagination;
