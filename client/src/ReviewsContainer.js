import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "./Context/UserContext";
import EditReviewCard from "./EditReviewCard";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";
import { GameContext } from "./Context/GameContext";
function ReviewsContainer({ currentGame }) {
  const [newReview, setNewReview] = useState("");
  const { id } = useParams();
  const [editReview, setEditReview] = useState(null);
const [ errors,setErrors] = useState([])
  const { user } = useContext(UserContext);
  const { setGames, games } = useContext(GameContext);

  function onSubmitReview(e) {
    e.preventDefault();
    const newForm = {
      body: newReview,
      user_id: user.id,
      game_id: id,
    };

    fetch(`/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newForm),
    }).then(r => {
      if (r.ok) {
        r.json().then(newGame => {
          const gamesNotChanging = games.filter(
            game => game.id !== newGame.game_id
          );
          const changingGame = games.filter(
            game => game.id === newGame.game_id
          )[0];
          changingGame.reviews.push(newGame);
          setGames([changingGame, ...gamesNotChanging]);
        });
      } else {
        r.json().then(data => {
          setErrors(data.errors);
        });
      }
    });
setErrors([])
    setNewReview("");
  }

  const handleEditClick = (e, reviews) => {
    e.preventDefault();
    setEditReview(reviews.id);
  };

  return (
    <>
      {currentGame.reviews.map(review =>
        editReview === review.id ? (
          <EditReviewCard setEditReview={setEditReview} review={review} />
        ) : (
          <ReviewCard
            currentGame={currentGame}
            key={review.id}
            review={review}
            handleEditClick={handleEditClick}
          />
        )
      )}

      <ReviewForm
      errors={errors}
        onSubmitReview={onSubmitReview}
        newReview={newReview}
        setNewReview={setNewReview}
      />
    </>
  );
}

export default ReviewsContainer;
