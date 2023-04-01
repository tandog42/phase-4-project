import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { UserContext } from "./Context/UserContext";
import { GameContext } from "./Context/GameContext";
function ReviewsCard({ review, handleEditClick }) {
  const { user } = useContext(UserContext);
  const { setGames, games } = useContext(GameContext);

  const updatedGames = review => {
    const gamesNotChanging = games.map(game => {
      if (game.id === review.game_id) {
        const reviewsArray = game.reviews.filter(
          gameReview => review.id !== gameReview.id
        );

        return { ...game, reviews: reviewsArray };
      } else {
        return game;
      }
    });
    setGames(gamesNotChanging);
  };
  console.log(games);

  function onClickDelete(review) {
    fetch(`/reviews/${review.id}`, {
      method: "DELETE",
    }).then(updatedGames(review));
  }

  return review.username === user.username ? (
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
        <Typography variant="h6">{review.body}</Typography>
        <br></br>
        <button onClick={e => handleEditClick(e, review)}>Edit</button>
        <br></br>
        <button onClick={() => onClickDelete(review)}>Delete</button>
        <br></br>
      </CardContent>
    </Card>
  ) : (
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
        <Typography variant="h6">{review.body}</Typography>
      </CardContent>
    </Card>
  );
}

export default ReviewsCard;
