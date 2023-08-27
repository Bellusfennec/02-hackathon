import React from "react";
import PropTypes from "prop-types";

const Name = (props) => {
  const { firstName, lastName, children } = props;
  return (
    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 flex items-center gap-5">
      {firstName} {lastName} {children}
    </h2>
  );
};
Name.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  firstName: PropTypes.string,
  lastName: PropTypes.string
};
export default Name;
