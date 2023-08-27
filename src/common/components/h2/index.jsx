import React from "react";
import PropTypes from "prop-types";

const H2 = ({ children }) => {
  return (
    <h1 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-xl ">
      {children}
    </h1>
  );
};
H2.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
export default H2;
