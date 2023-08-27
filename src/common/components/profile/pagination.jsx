import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Pagination = (props) => {
  const { prev, next } = props;

  return (
    <div className="flex gap-5 justify-center mt-5">
      {prev && (
        <Link to={`/${prev.id}`} className="flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Предыдущий
        </Link>
      )}{" "}
      {next && (
        <Link to={`/${next.id}`} className="flex gap-1">
          Следующий
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      )}
    </div>
  );
};
Pagination.propTypes = {
  prev: PropTypes.object,
  next: PropTypes.object
};
export default Pagination;
