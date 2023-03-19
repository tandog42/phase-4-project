import React from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ReviewsContainer from './ReviewsContainer'
import ReviewForm from './ReviewForm'
function GameDetail({ games }) {
  //  const [reviews, setReviews] = useState("");
  const { id } = useParams();
  const getGame = games.find(game => game.id === parseInt(id));
  //  const { user } = useContext(UserContext);

console.log(getGame)
  return (
  <div className="float-container">
    
   
  <div className="float">
    <Card id="gameReviewCard" sx={{ maxWidth: 1000 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="831"
          src={getGame.image_url}
          alt={getGame.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {getGame.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {getGame.genre}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {getGame.platform}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
<div>
    <ReviewForm currentGame ={getGame} />
    </div>
    
    </div>
  );
}
  


export default GameDetail;
