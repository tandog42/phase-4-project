import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
function Game({ game }) {

 

  return (
    
    <Card key={game.id} sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          src={game.image_url}
          alt={game.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {game.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {game.genre}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {game.platform}
          </Typography>
          <Link to={`/games/${game.id}`}>See more </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default Game;
