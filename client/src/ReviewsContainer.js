import React from "react";
import ReviewCard from './ReviewCard'
import ReviewForm from './ReviewForm'
function ReviewsContainer({ currentGame }) {






  
  
  return (
   <>
      {currentGame.reviews.map(review => (
        <ReviewCard key={review.id} review={review} />
        ))}
        <ReviewForm />
    </>
  );
}

export default ReviewsContainer;
