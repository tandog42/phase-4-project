import React, { useContext } from "react";
import { GameContext } from "./Context/GameContext";
import Game from "./Game";
import NewGameForm from "./NewGameForm";
function GamesContainer({addNewGame }) {
  const {games} = useContext(GameContext)
  return (
    <>
      <div id="gamesContainer">
        {games.map(game => (
          <Game key={game.id} game={game} />
        ))}
      </div>
      <div>
        <NewGameForm  addNewGame={addNewGame} />
      </div>
    </>
  );
}

export default GamesContainer;
