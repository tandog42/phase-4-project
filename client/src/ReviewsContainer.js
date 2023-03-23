import React, { useContext, useState } from "react";
import { UserContext } from "./Context/UserContext";
import EditReviewCard from "./EditReviewCard";

import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";
function ReviewsContainer({ currentGame }) {
  const [reviews, setReviews] = useState(currentGame.reviews);
  const [newReview, setNewReview] = useState("");
  const [editReview, setEditReview] = useState(null);
  const { user } = useContext(UserContext);

  function onSubmitReview(e) {
    e.preventDefault();
    const newForm = {
      body: newReview,
      game_id: currentGame.id,
      user_id: user.id,
    };

    fetch(`/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newForm),
    })
      .then(r => r.json())
      .then(newReview => setReviews([...reviews, newReview]));
  }

  function handleDeleteReview(deletedReview) {
    const updatedReviews = reviews.filter(
      review => review.id !== deletedReview.id
    );

    setReviews(updatedReviews);
  }



  const handleEditClick = (e, reviews) => {
    e.preventDefault();
    setEditReview(reviews.id);
  };

  return (
    <>
      <div>
        {reviews.map(review =>
          editReview === review.id ? (
            <EditReviewCard  reviews={reviews}setReviews={setReviews}currentGame ={currentGame} key={review.id}review={review} />
          ) : (
            <ReviewCard
              onDeleteReview={handleDeleteReview}
              key={review.id}
              review={review}
              handleEditClick={handleEditClick}
            />
          )
        )}
      </div>
      <div>
        <ReviewForm
          onSubmitReview={onSubmitReview}
          newReview={newReview}
          setNewReview={setNewReview}
        />
      </div>
    </>
  );
}

export default ReviewsContainer;
