import React from "react";
// import Rating from "../Rating";
import PropTypes from "prop-types";
import Avatar from "../avatar";
import Icon from "../icon";

const Review = ({ data }) => {
  const { reviewId, name, rating, text, date } = data;
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
        <Avatar src={`https://xsgames.co/randomusers/assets/avatars/male/${reviewId % 75}.jpg`} />
        <div>
          <div className="flex gap-3">
            <span>{name}</span>
            <div>
              <div className="flex items-center gap-1">
                <Icon name="star" className="text-sky-500 w-[16px] h-[16px]" />
                <span>{rating}</span>
              </div>
            </div>
          </div>
          <div className="text-gray-500">{date}</div>
        </div>
      </div>
      <div className="max-w-3xl">{text}</div>
    </div>
  );
};

Review.propTypes = {
  data: PropTypes.shape({
    reviewId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired
};
export default Review;