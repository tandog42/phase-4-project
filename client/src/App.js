import { Route, Routes } from "react-router-dom";
import React, { useState, useContext } from "react";
import ButtonAppBar from "./ButtonAppBar";
import LoginForm from "./LoginForm";
import Signup from "./Signup";
import GamesContainer from "./GamesContainer";
import GameDetail from "./GameDetail";
import { UserContext } from "./Context/UserContext";
import { GameContext } from "./Context/GameContext";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const { user } = useContext(UserContext);
  const { games, setGames } = useContext(GameContext);

  const toggleForm = formName => setCurrentForm(formName);

  const addNewGame = game => setGames([...games, game]);



  const noUserForm = () => currentForm === "login"? <LoginForm toggleForm={toggleForm} /> : <Signup toggleForm={toggleForm} />
  if (!user) return noUserForm()
  return (
    <>
      <ButtonAppBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            currentForm === "login" ? (
              <LoginForm toggleForm={toggleForm} />
            ) : (
              <Signup toggleForm={toggleForm} />
            )
          }
        />
        <Route
          path="/games"
          element={<GamesContainer addNewGame={addNewGame} />}
        />

        <Route path="/games/:id" element={<GameDetail />} />
      </Routes>
    </>
  );
}

export default App;
