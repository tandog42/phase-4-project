import React from "react";
import Game from "./Game";
import NewGameForm from "./NewGameForm";
function GamesContainer({ games, addNewGame }) {
  console.log(games);

  return (
    <>
      <div id="gamesContainer">
        {games.map(game => (
          <Game key={game.id} game={game} />
        ))}
      </div>
      <div>
        <NewGameForm addNewGame={addNewGame} />
      </div>
    </>
  );
}

export default GamesContainer;
