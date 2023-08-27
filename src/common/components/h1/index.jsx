import React from "react";
import PropTypes from "prop-types";

const H1 = ({ children }) => {
  return (
    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl px-5 sm:px-0">
      {children}
    </h1>
  );
};
H1.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
export default H1;
