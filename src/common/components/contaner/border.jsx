import React from "react";
import PropTypes from "prop-types";
const Border = (props) => {
  const { children, className } = props;
  return (
    <div
      className={
        "bg-white overflow-hidden rounded-lg shadow" +
        (className ? " " + className : "")
      }
    >
      {children}
    </div>
  );
};

Border.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string
};

export default Border;
