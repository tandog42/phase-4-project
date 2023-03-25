import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "./Context/UserContext";
import EditReviewCard from "./EditReviewCard";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";
function ReviewsContainer({ games, setGames,currentGame }) {
  const [reviews, setReviews] = useState(currentGame.reviews);
  const [newReview, setNewReview] = useState("");
  const {id} = useParams()
  const [editReview, setEditReview] = useState(null);
  const { user } = useContext(UserContext);
console.log("1", currentGame.reviews)
console.log(id)
  function onSubmitReview(e) {
    e.preventDefault();
    const newForm = {
      body: newReview,
      user_id: user.id,
      game_id: id
    };

    fetch(`/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newForm),
    })
      .then(r => r.json())
      .then(newReview => setReviews( [...currentGame.reviews, newReview]));
      
      setNewReview("")
    }
    
console.log(reviews)
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
            <EditReviewCard
              setReviews={setReviews}
              currentGame={currentGame}
              games={games}
              setGames={setGames}
              key={review.id}
              review={review}
              reviews={reviews}
              setEditReview={setEditReview}
            />
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
      <div  key={currentGame.id}>
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
