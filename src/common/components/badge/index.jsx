import React from "react";
import PropTypes from "prop-types";

const Badge = (props) => {
  const { children, className } = props;
  const color = props.color ? props.color : "blue";
  const size = props.size ? props.size : "xs";
  const colorVariants = {
    blue: "bg-blue-100 text-blue-800",
    grey: "bg-grey-100 text-grey-800",
    red: "bg-red-100 text-red-800",
    green: "bg-green-100 text-green-800",
    yellow: "bg-yellow-100 text-yellow-800",
    indigo: "bg-indigo-100 text-indigo-800",
    purple: "bg-purple-100 text-purple-800",
    pink: "bg-pink-100 text-pink-800"
  };
  const sizeVariants = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg"
  };

  return (
    <span
      className={
        `${colorVariants[color]} ${sizeVariants[size]} font-medium mr-2 px-2.5 py-0.5 rounded whitespace-nowrap` +
        (className ? " " + className : "")
      }
    >
      {children}
    </span>
  );
};
Badge.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string
};

export default Badge;
