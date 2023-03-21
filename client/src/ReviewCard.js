import React, { useContext, useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { UserContext } from "./Context/UserContext";

function ReviewsCard({ review }) {
  const { user } = useContext(UserContext);


 

  return review.username === user.username ? (
    <Card id="reviewCard">
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {review.username}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {review.body}
        </Typography>
        <button>Delete</button>
        <button>Edit</button>
      </CardContent>
    </Card>
  ) : (
    <Card id="reviewCard">
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {review.username}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {review.body}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ReviewsCard;
