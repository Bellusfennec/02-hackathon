import React, {useEffect, useRef, useState} from 'react';
import Icon from "../icon";
import PropTypes from "prop-types";
import PaginationSlider from "./paginationSlider";

const Slider = ({ images, duration }) => {
  const listSliders = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState(false);
  const prevSlide = useRef(0);
  let timer = null;
  const handleNextSlide = () => {
    if (currentIndex !== images.length - 1 && !animation) {
      slideTo(currentIndex + 1);
    }
  }
  const handlePrevSlide = () => {
    if (currentIndex !== 0 && !animation) {
      slideTo(currentIndex - 1);
    }
  }
  const slideTo = (newCurrentSlide) => {
    let currentTranslate = currentIndex * 100;
    prevSlide.current = currentIndex;
    const sliceNumber = Math.abs(newCurrentSlide - currentIndex);
    setCurrentIndex(newCurrentSlide);
    setAnimation(true);
    timer = setInterval(() => {
      newCurrentSlide > currentIndex ? currentTranslate++ : currentTranslate--;
      listSliders.current.style.transform = `translateX(-${currentTranslate}%)`;
      if (currentTranslate === newCurrentSlide * 100) {
        clearInterval(timer);
        setAnimation(false);
      }
    }, duration / 100 / sliceNumber);
  }
  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timer]);
  return (
    <div>
      <div className="flex w-full gap-4">
        <div className="flex items-center">
          <button
              onClick={handlePrevSlide}
              className="text-gray-400 hover:text-black duration-200 h-auto"
          >
            <Icon name="prev" className="h-[52px] w-[31px]" />
          </button>
        </div>
        <div className="relative h-120 w-full overflow-hidden">
          <ul
              ref={listSliders}
              className="flex h-full w-auto"
          >
            {images.map((image, index) => (
                <li
                    key={index}
                    className="w-full h-full shrink-0 flex justify-center items-center"
                >
                  <img
                      className="h-full w-full object-contain"
                      src={image}
                      alt=""
                  />
                </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <button
              onClick={handleNextSlide}
              className="text-gray-400 hover:text-black duration-200 h-auto"
          >
            <Icon name="next" className="h-[52px] w-[31px]" />
          </button>
        </div>
      </div>
      <PaginationSlider items={images} currentIndex={currentIndex} onClick={slideTo} />
    </div>
  );
};

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  duration: function(props, propName, componentName) {
    const value = props[propName];
    if (value === undefined) {
      return new Error(`Prop ${propName} is required in ${componentName}.`);
    }
    if (typeof value !== "number") {
      return new Error(`Invalid prop ${propName} supplied to ${componentName}. Expected a number.`);
    }
    if (!Number.isInteger(value)) {
      return new Error(`Invalid prop ${propName} supplied to ${componentName}. Expected an integer.`);
    }
    if (value < 100 || value > 10000) {
      return new Error(`Invalid prop ${propName} supplied to ${componentName}. Expected a value between 100 and 10000.`);
    }
  }
};

Slider.defaultProps = {
  duration: 1000
};

export default Slider;