import React, { useContext } from "react";
import { UserContext } from "./Context/UserContext";
import Typography from "@mui/material/Typography";
function ReviewForm() {
  const { user } = useContext(UserContext);


  return (
    <div className="comment-box">
  
      <form  >
      <Typography id="reviewName" variant="h6" component="div">
          {user.username}
        </Typography>

        <textarea  onChange={e => console.log(e.target.value)}name="comment" placeholder="Leave a Review"></textarea>
        <button  className="comment-submit">Submit</button>
      </form>
    </div>
  );
}

export default ReviewForm;
