import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "./Context/UserContext";
import ButtonAppBar from "./ButtonAppBar";
import LoginForm from "./LoginForm";
import Signup from "./Signup";
import GamesContainer from "./GamesContainer";
import GameDetail from "./GameDetail";
import ReviewsCard from "./ReviewsCard";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const [games, setGames] = useState([]);
  const { user } = useContext(UserContext);
  const toggleForm = formName => setCurrentForm(formName);
  console.log(user);

  useEffect(() => {
    fetch(`/games`)
      .then(r => r.json())
      .then(games => setGames(games));
  }, []);

  const addNewGame = game => setGames(currentGames => [...currentGames, game]);

  if (!user) return <LoginForm />;
  return (
    <>
      <ButtonAppBar />
      <Routes>
        <Route
          path="/games"
          element={<GamesContainer addNewGame={addNewGame} games={games} />}
        />

        <Route path="/games/:id" element={<GameDetail games={games} />} />
        <Route path="/games/:id/reviews" element={<ReviewsCard />}></Route>
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
      </Routes>
    </>
  );
}

export default App;
