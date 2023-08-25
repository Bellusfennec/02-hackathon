import React from 'react';
import PropTypes from "prop-types";

const Progress = ({ percent, type }) => {
  if (type === "circle") {
    return (
      <div className="w-40 h-40 bg-gray-300 rounded-full overflow-hidden">
        <div className="w-full h-full" style={{
          background: `conic-gradient(#4d5bf9 ${percent * 3.6}deg, #cadcff ${percent * 3.6}deg)`
        }}></div>
      </div>
    );
  }
  return (
    <div className="w-full h-10 bg-gray-300">
      <div
        className="bg-blue-500 h-full"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};

Progress.defaultProps = {
  type: "bar"
};

Progress.propTypes = {
  percent: PropTypes.number.isRequired,
  type: PropTypes.oneOf(["bar", "circle"])
};

export default Progress;