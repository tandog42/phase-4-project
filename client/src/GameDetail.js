import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ReviewsContainer from "./ReviewsContainer";
import { GameContext } from "./Context/GameContext";

function GameDetail() {
  const { id } = useParams();
  const {games} = useContext(GameContext)
  const currentGame =  games.find(game => game.id === parseInt(id));
 

  return (
    currentGame ? (
    <div className="float-container">
      <div className="float">
        <Card id="gameReviewCard" sx={{ maxWidth: 1000,  maxHeight:1000}}>
          <CardActionArea>
            <CardMedia
              component="img"
             height="740"
              src={currentGame.image_url}
              alt={currentGame.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {currentGame.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {currentGame.genre}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {currentGame.platform}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div>
        <ReviewsContainer  currentGame={currentGame}  />
      </div>
    </div>
    ) : (
      <div>Loading...</div>
  ))
}

export default GameDetail;
