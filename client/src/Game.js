import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function Game({ game, onClickGame }) {
  const { title, genre, platform, image_url } = game;
  
  
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea onClick={(e)=>onClickGame(game.id)}>
        <CardMedia component="img" height="200" image={image_url} alt={title} />
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default Game;
