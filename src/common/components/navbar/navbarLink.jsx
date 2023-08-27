import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavbarLink = (props) => {
  const { children, to, className } = props;

  return (
    <Link
      to={to}
      className={
        "inline-block py-5 font-medium text-gray-600 hover:underline underline-offset-3" +
        (className ? " " + className : "")
      }
    >
      {children}
    </Link>
  );
};
NavbarLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  to: PropTypes.string,
  className: PropTypes.string
};

export default NavbarLink;
