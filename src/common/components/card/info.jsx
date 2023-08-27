import React from "react";
import PropTypes from "prop-types";
const Info = (props) => {
  const { info } = props;
  return <p className="mb-3 font-normal text-gray-700">{info}</p>;
};
Info.propTypes = {
  info: PropTypes.string
};
export default Info;
