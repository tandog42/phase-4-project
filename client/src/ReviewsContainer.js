import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "./Context/UserContext";
import EditReviewCard from "./EditReviewCard";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";
function ReviewsContainer({ games, setGames,currentGame }) {
  const [reviews, setReviews] = useState(currentGame.reviews);
  const [newReview, setNewReview] = useState("");
  const {id} = useParams()
  const [editReview, setEditReview] = useState(null);
  const [updatedReview, setUpdatedReview] = useState("")
  
  const { user } = useContext(UserContext);
console.log(updatedReview)
  function onSubmitReview(e) {
    e.preventDefault();
    const newForm = {
      body: newReview,
      user_id: user.id,
      game_id: id
    };

    fetch(`/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newForm),
    })
      .then(r => r.json())
      .then(newReview => setReviews(currentReviews => [...currentReviews, newReview]));
      
  
      setNewReview("")
    }

    console.log(currentGame)




    function onSubmit(ids) {
 
      const data = {
        game_id: currentGame.id,
        body: updatedReview
      }

      fetch(`/reviews/${ids}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then(r => r.json())
        .then(newData => {
setReviews(newData)
            // const newGame = games.map(game => {
            //   if (game.id === newData.game.id) {
            //     const gameReviews = game.reviews.map(review => {
            //       if (review.id === newData.id) {
            //      return newData.review
            //       } else {
            //         return review;
            //       }
            //     });
            //     setReviews(gameReviews);
    
              //   game.reviews = gameReviews
              //   return game
              // } else {
              //   return game;
              // }
              // }})
            // setGames(newGame)
          })}
       
    

  function handleDeleteReview(deletedReview) {
    const updatedReviews = reviews.filter(
      review => review.id !== deletedReview.id
    );

    setReviews(updatedReviews);
  }

  const handleEditClick = (e, reviews) => {
    e.preventDefault();
    setEditReview(reviews.id);
  };
console.log(reviews)
  return (
    <>
      <div>
        {reviews.map(review => (
          editReview === review.id ? (
            <EditReviewCard
            setUpdatedReview={setUpdatedReview}
              key={review.id}
             onSubmit={onSubmit}
              review={review}
              setEditReview={setEditReview}
            />
          ) : (
            <ReviewCard
              onDeleteReview={handleDeleteReview}
              key={review.id}
              review={review}
              handleEditClick={handleEditClick}
            />
          )
        ))}
      </div>
      <div  key={currentGame.id}>
        <ReviewForm
          onSubmitReview={onSubmitReview}
          newReview={newReview}
          setNewReview={setNewReview}
        />
      </div>
    </>
  );
}

export default ReviewsContainer;
