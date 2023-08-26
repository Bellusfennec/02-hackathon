import React, { useRef } from 'react';
import PropTypes from "prop-types";

const Progress = ({ percent, name, type, size, color, colorFill, duration }) => {
  const progressElem = useRef(null);
  const progressText = useRef(null);
  if (typeof percent !== "number") percent = 0;
  const progressAnimation = () => {
    let currentProgress = 0;
    const timer = setInterval(() => {
      if (progressElem.current) {
        if (type === "circle") progressElem.current.style.background = `conic-gradient(${colorFill} ${currentProgress * 3.6}deg, ${color} ${currentProgress * 3.6}deg)`;
        else progressElem.current.style.width = `${currentProgress}%`;
        progressText.current.textContent = `${currentProgress}%`;
        currentProgress++;
        if (currentProgress > percent) {
          clearInterval(timer);
        }
      }
    }, duration/100);
  }
  const renderProgress = () => {
    if (type === "circle") {
      progressAnimation();
      return (
        <div
          className="bg-gray-300 rounded-full overflow-hidden relative flex items-center justify-center"
          style={{
            width: `${size}px`,
            height: `${size}px`
          }}
        >
          <div
            ref={progressElem}
            className="w-full h-full"
               style={{
                 background: `conic-gradient(${colorFill} ${percent * 3.6}deg, ${color} ${percent * 3.6}deg)`
               }}></div>
          <span
            ref={progressText}
            className="absolute text-xl"
            style={{
              background: "#FFFFFF",
              width: `${size - 20}px`,
              height: `${size - 20}px`,
              borderRadius: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >{percent + "%"}</span>
        </div>
      );
    }
    progressAnimation();
    return (
      <div
        className="w-full relative flex items-center justify-center"
        style={{
          height: `${size}px`,
          background: color
        }}
      >
        <div
          ref={progressElem}
          className="h-full mr-auto"
          style={{
            width: `${percent}%`,
            background: colorFill
          }}
        ></div>
        <span
          ref={progressText}
          className="absolute text-xl">{percent + "%"}</span>
      </div>
    );
  }
  return (
    <div>
      <h3 className="text-2xl font-medium mb-3">{name}</h3>
      {renderProgress()}
    </div>
  );
};

Progress.defaultProps = {
  type: "bar",
  size: 40,
  color: "#FDF1C1",
  colorFill: "#FFC602FF",
  duration: 0
};

Progress.propTypes = {
  percent: PropTypes.oneOf(Array.from(Array(101).keys())),
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["bar", "circle"]),
  size: PropTypes.number,
  color: PropTypes.string,
  colorFill: PropTypes.string,
  duration: PropTypes.number
};

export default Progress;