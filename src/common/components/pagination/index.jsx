import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pageCount; i++) pages.push(i);
  return (
    <div className="text-sm">
      <ul className="flex">
        {pages.map(page =>
          <li key={"page_" + page}
              className={(page === currentPage ? "bg-gray-200 " : "") + "px-4 py-2 rounded-full hover:text-[#FFC602FF] hover:bg-[#FDF1C1]"}
              role="button"
              onClick={() => onPageChange(page)}
          >{page}</li>
        )}
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

Pagination.defaultProps = {};

export default Pagination;