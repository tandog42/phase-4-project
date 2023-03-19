import React from "react";
import ReviewForm from './ReviewForm'

function ReviewsContainer({ currentGame }) {
  
  return (
    <div>
      {currentGame.reviews.map(review => (
        <ReviewForm key={review.id} review={review} />
      ))}
    </div>
  );
}

export default ReviewsContainer;
