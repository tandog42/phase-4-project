import React from "react";
import Game from "./Game";

function GamesContainer({ games }) {

  function onClickGame(id) {
    fetch(`/games/${id}`)
    .then(r => r.json())
    .then(game => console.log(game))
  }
  
  return (
    <div id="gamesContainer">
      {games.map(game => (
        <Game onClickGame={onClickGame}key={game.id} game={game} />
      ))}
    </div>
  );
}

export default GamesContainer;
