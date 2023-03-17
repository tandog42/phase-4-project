import React from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

function GameDetail({ games }) {
  const { id } = useParams();
  const getGame = games.find(game => game.id === parseInt(id));
  console.log(games, id);

  return (
    <Card key={getGame.id} sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
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
          <Link to={`/games/${getGame.id}`}>See more </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default GameDetail;
