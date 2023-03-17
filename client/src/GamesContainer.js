import React from "react";
import Game from "./Game";

function GamesContainer({ games }) {
  console.log(games)
  return (
    <div id="gamesContainer">
      {games.map(game => (
        <Game key={game.id} game={game} />
      ))}
    </div>
  );
}

export default GamesContainer;
