import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


function EditReviewCard({
  games,
  setGames,
  reviews,
  setReviews,
  review,
  setEditReview,
  currentGame,
}) {
  const [updatedReview, setUpdatedReview] = useState(review.body);

  function onSubmit() {
    const data = {
      body: updatedReview,
      game_id: currentGame.id,
    };

    fetch(`/reviews/${review.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(r => r.json())
      .then(newData => {
         
        const gameReviews = currentGame.reviews.map(review => {
          if (review.id === newData.id) {
            return newData;
          } else {
            return review;
          }
        });
        setReviews(gameReviews)
        
      });
        setEditReview(null);
  }

  //   const gameReviews = game.reviews.map(review => {
  //     if (review.id === newData.id) {
  //       return newData;
  //     } else {
  //       return review;
  //     }
  //   });
  //   setReviews(gameReviews);
  //   game.reviews = gameReviews;
  //   return game;
  // } else {
  //   return game;

  console.log(games);

  // setEditReview(null);

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
