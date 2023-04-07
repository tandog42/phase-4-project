import React, { useContext, useState } from "react";
import { UserContext } from "./Context/UserContext";
import Typography from "@mui/material/Typography";
function ReviewForm({ errors,setNewReview, newReview, onSubmitReview }) {
  const { user } = useContext(UserContext);
console.log(errors)
  return (
    <div className="comment-box">
      <form onSubmit={onSubmitReview}>
        <Typography id="reviewName" variant="h6" component="div" color="text.secondary">
          {user.username}
        </Typography>

        <textarea
          onChange={e => setNewReview(e.target.value)}
          placeholder="Leave a Review"
          value={newReview}
        ></textarea>
        <div>{errors}</div>
        <button type="submit"className="comment-submit">Submit</button>
      </form>
    </div>
  );
}

export default ReviewForm;
