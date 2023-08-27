import React from "react";
import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="mx-auto max-w-5xl sm:px-5 lg:px-0">{children}</div>;
};
Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
export default Container;
