import React from "react";
import { Link } from "react-router-dom";
import Game from "./Game";

function GamesContainer({ games, deleteGame }) {

  function onClickGame(id) {
    fetch(`/games/${id}`)
    .then(r => r.json())
    .then(game => console.log(game))
  }
  
  return (
    <div id="gamesContainer">
      {games.map(game => (
        <Link style={{textDecoration: 'none' }} key={game.id} to={"games/" + game.id}>
        <Game  deleteGame={deleteGame} onClickGame={onClickGame} key={game.id} game={game} />
         </Link>
      ))}
    </div>
  );
}

export default GamesContainer;
