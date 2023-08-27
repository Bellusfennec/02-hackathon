import React, {useRef} from 'react';
import Icon from "../Icon";
import PropTypes from "prop-types";

const Slider = ({ images, duration }) => {
  const listSliders = useRef(null);
  let currentIndex = 0;
  // const nextSlide = () => {
  //   if (currentIndex !== images.length - 1) {
  //     let currentTranslate = currentIndex * 100;
  //     currentIndex++;
  //     const timer = setInterval(() => {
  //       currentTranslate++;
  //       listSliders.current.style.transform = `translateX(-${currentTranslate}%)`;
  //       if (currentTranslate === currentIndex * 100) clearInterval(timer);
  //     }, duration/100);
  //   }
  // }
  // const prevSlide = () => {
  //   if (currentIndex !== 0) {
  //     let currentTranslate = currentIndex * 100;
  //     currentIndex--;
  //     const timer = setInterval(() => {
  //       currentTranslate--;
  //       listSliders.current.style.transform = `translateX(-${currentTranslate}%)`;
  //       if (currentTranslate === currentIndex * 100) clearInterval(timer);
  //     }, duration/100);
  //   }
  // }
  const handleNextSlide = () => {
    if (currentIndex !== images.length - 1) {
      currentIndex++;
      slideTo(currentIndex);
    }
  }

  const handlePrevSlide = () => {
    if (currentIndex !== 0) {
      currentIndex--;
      slideTo(currentIndex);
    }
  }

  const slideTo = (index) => {
    let currentTranslate = index * 100;
    const timer = setInterval(() => {
      if (currentIndex < index) {
        currentTranslate++;
      } else {
        currentTranslate--;
      }
      listSliders.current.style.transform = `translateX(-${currentTranslate}%)`;
      if (currentTranslate === index * 100) clearInterval(timer);
    }, duration/100);
  }
  return (
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
              className="w-full h-full shrink-0 flex justify-center items-center bg-orange-400"
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