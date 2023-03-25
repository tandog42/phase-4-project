import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { UserContext } from "./Context/UserContext";
function ReviewsCard({ review, onDeleteReview, handleEditClick }) {
  const { user } = useContext(UserContext);

  function onClickDelete() {
    fetch(`/reviews/${review.id}`, {
      method: "DELETE",
    })
      .then(r => r.json)
      .then(onDeleteReview(review));
  }

  return review.username === user.username ? (
    <Card key={review.id}id="reviewCard">
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
        <button onClick={onClickDelete}>Delete</button>
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
