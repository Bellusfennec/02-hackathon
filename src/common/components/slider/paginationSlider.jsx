import React from "react";
import PropTypes from "prop-types";

const PaginationSlider = ({ items, currentIndex, onClick }) => {
  return (
    <ul className="mt-4 flex items-center gap-2 justify-center">
      {items.map((item, index) => (
        <li key={index} className="h-full flex items-center">
          <button
            onClick={() => onClick(index)}
            className={`${
              index === currentIndex ? "w-4 h-4" : "w-2 h-2"
            } bg-black rounded-full`}
          ></button>
        </li>
      ))}
    </ul>
  );
};

PaginationSlider.propTypes = {
  items: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func
};

export default PaginationSlider;
