import React, { useState } from 'react';
import Review from "./review";
import { orderBy } from "lodash";
import Pagination from "../pagination";
import SortOptions from "../sortOptions";
import PropTypes from "prop-types";

function paginate(items, pageSize, pageNumber) {
  return [...items].splice((pageNumber - 1) * pageSize, pageSize);
};

const Reviews = ({ reviews }) => {
  const [currentPageReview, setCurrentPageReview] = useState(1);
  const [sortReviewBy, setSortReviewBy] = useState({ iter: "rating", order: "desc" });
  const sortReviewsOptions = [
    { field: "rating", text: "По рейтингу" },
    { field: "date", text: "По дате" }
  ];
  const reviewOnPage = 5;
  const handleSortReviews = (value) => {
    setSortReviewBy(value);
    setCurrentPageReview(1);
  };
  const handlePageReviewChange = (pageNumber) => {
    setCurrentPageReview(pageNumber);
  };
  const sortByDate = (items) => {
    return orderBy(items, [item => {
      const [day, month, year] = item.date.split(".");
      return new Date(`${year}-${month}-${day}`);
    }], [sortReviewBy.order]);
  };
  let sortedReviews = reviews;
  if (sortReviewBy) {
    sortedReviews = sortReviewBy.iter === "date"
      ? sortByDate(reviews)
      : orderBy(reviews, [sortReviewBy.iter], [sortReviewBy.order]);
  }
  const reviewsCrop = paginate(sortedReviews, reviewOnPage, currentPageReview);
  return (
    <div className="max-w-3xl flex flex-col gap-10">
      <div className="flex justify-between">
        <h3 className="text-3xl">Отзывы {reviews.length}</h3>
        <SortOptions onSort={handleSortReviews} selectedSort={sortReviewBy} items={sortReviewsOptions} />
        <div className="hidden md:block">
          <Pagination
            pageSize={reviewOnPage}
            onPageChange={handlePageReviewChange}
            currentPage={currentPageReview}
            itemsCount={reviews.length}
          />
        </div>
      </div>
      <ul className="flex flex-col gap-8">
        {reviewsCrop.map(review =>
          <li key={review.reviewId}>
            <Review data={review} />
          </li>
        )}
      </ul>
      <div className="flex justify-center md:justify-start">
        <Pagination
          pageSize={reviewOnPage}
          onPageChange={handlePageReviewChange}
          currentPage={currentPageReview}
          itemsCount={reviews.length}
        />
      </div>
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      reviewId: PropTypes.number,
      name: PropTypes.string,
      rating: PropTypes.number,
      text: PropTypes.string,
      date: PropTypes.string
    })
  ).isRequired
};

export default Reviews;