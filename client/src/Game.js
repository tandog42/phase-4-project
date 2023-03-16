import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function Game({ game, onClickGame,deleteGame }) {
  const { title, genre, platform, image_url } = game;
console.log(game)
  
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia  onClick={(e)=>onClickGame(game.id)} component="img" height="300" image={image_url} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {genre}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {platform}
          </Typography>
          <button onClick={() => deleteGame(game.id)}>Delete</button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default Game;
