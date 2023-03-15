import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ButtonAppBar from "./ButtonAppBar";
import LoginForm from "./LoginForm";
import Signup from "./Signup";
import GamesContainer from "./GamesContainer";
import Game from "./Game";
function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const [games, setGames] = useState([]);
  const toggleForm = formName => setCurrentForm(formName);

  useEffect(() => {
    fetch(`/games`)
      .then(r => r.json())
      .then(games => setGames(games));
  }, []);
console.log(games)



  return (
    <div className="App">
      <ButtonAppBar />
      <Routes>
        <Route
          path="/"
          element={
            currentForm === "login" ? (
              <LoginForm toggleForm={toggleForm} />
            ) : (
              <Signup toggleForm={toggleForm} />
            )
          }
        />
        <Route path="/games" element={<GamesContainer games={games} />} />
        <Route path="/games/:id" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
