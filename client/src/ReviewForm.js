import React from "react";

function ReviewForm() {
 

  return (
    <div className="comment-session">
      <div className="comment-box">
        <div className="user">
          <div className="name">dada</div>
        </div>
        <form action="" method="post">
          <textarea name="comment" placeholder="Leave a Review"></textarea>
          <button className="comment-submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ReviewForm;
