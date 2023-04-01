import React, { createContext, useState, useEffect } from "react";

const GameContext = createContext();

function GameProvider({ children }) {
  const [games, setGames] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch(`/games`).then(r => {
      if (r.ok) {
        r.json().then(allGames => setGames(allGames));
      } else {
        r.json().then(e => setErrors(Object.entries(e.errors)));
      }
    });
  }, []);
  
  return (
    <GameContext.Provider
      value={{
        games,
        setGames,
        errors
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
export {GameContext, GameProvider}