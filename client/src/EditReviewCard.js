import React, { useState, useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { GameContext } from "./Context/GameContext";
function EditReviewCard({
  setEditReview,

  review,
  setReviews,
  
}) {
  const { setGames, games } = useContext(GameContext);
  const [updatedReview, setUpdatedReview] = useState("");
  

  function onSubmit(id) {
    const data = {
      body: updatedReview,
    };

    fetch(`/reviews/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(r => r.json())
      .then(r => {
        const updatedGames = games.map(game => {
          if (game.id === r.game_id) {
            const updatedGameReviews = game.reviews.map(review => {
              if (review.id === r.id) {
                return r;
              } else {
                return review;
              }
            });
            return { ...game, reviews: updatedGameReviews };
          } else {
            return game;
          }
        });
      setGames(updatedGames)
      });
   
    setEditReview(null);
  }

  return (
    <div>
      <Card key={review.id} id="reviewCard">
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

          <button id="EditReviewSave" onClick={() => onSubmit(review.id)}>
            Save
          </button>
        </CardContent>
      </Card>
    </div>
  );
}

export default EditReviewCard;
