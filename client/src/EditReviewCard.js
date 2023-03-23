import React, { useContext, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function EditReviewCard({
  setReviews,
  review,
  updateReview,
  currentGame,
  reviews,
}) {
  const [updatedReview, setUpdatedReview] = useState("");
  console.log(currentGame.reviews)
  function onSubmit(e) {

    const data = {
      
      body: updatedReview
    }
    e.preventDefault();
    fetch(`/reviews/${review.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(updatedReview => {
        const updateReviews = currentGame.reviews.map(review => {
        
          if (review.id == updatedReview.id) {
            return updatedReview;
          } else {
            return review;
          }
        });
        setReviews(updateReviews)
      });
  }

  return (
    <div>
      <Card id="reviewCard">
        <CardContent>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            color="text.secondary"
          >
            {review.username}
          </Typography>

          <textarea
            id="editReviewInput"
            required="required"
            placeholder={review.body}
            name="review"
            onChange={e => setUpdatedReview(e.target.value)}
          ></textarea>

          <button id="EditReviewSave" onClick={onSubmit}>
            Save
          </button>
        </CardContent>
      </Card>
    </div>
  );
}

export default EditReviewCard;
