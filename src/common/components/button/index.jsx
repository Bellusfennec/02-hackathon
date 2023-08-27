import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const { children, onClick } = props;
  const type = props.type ? props.type : "submit";
  const rounded = props.rounded ? props.rounded : "lg";
  const bg = props.bg ? props.bg : "transparent";
  const color = props.color ? props.color : "white";
  const size = props.size ? props.size : "sm";
  const py = props.py ? props.py : "2";
  const px = props.px ? props.px : "4";
  const ring = props.ring ? "" : `focus:ring-4 focus:ring-${bg}-300`;
  return (
    <button
      onClick={onClick}
      type={type}
      className={`inline-flex items-center px-${px} py-${py} text-${size} font-medium text-center text-${color} bg-${bg}-500 rounded-${rounded} hover:bg-${bg}-600 focus:outline-none ${ring}`}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onClick: PropTypes.func,
  type: PropTypes.string,
  rounded: PropTypes.string,
  bg: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  py: PropTypes.string,
  px: PropTypes.string,
  ring: PropTypes.string
};
export default Button;
