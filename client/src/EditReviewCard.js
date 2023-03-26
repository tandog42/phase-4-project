import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


function EditReviewCard({
 
 
setUpdatedReview,
 onSubmit,
  review,
  setEditReview,
  
}) {
  

 
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

          <button id="EditReviewSave" onClick={() => onSubmit(review.id)}>
            Save
          </button>
        </CardContent>
      </Card>
    </div>
  );
}

export default EditReviewCard;
