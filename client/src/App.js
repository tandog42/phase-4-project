import { Route, Routes} from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "./Context/UserContext";
import ButtonAppBar from "./ButtonAppBar";
import LoginForm from "./LoginForm";
import Signup from "./Signup";
import GamesContainer from "./GamesContainer";
import GameDetail from "./GameDetail";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const [games, setGames] = useState([]);
  const { user } = useContext(UserContext);
  const toggleForm = formName => setCurrentForm(formName);
  
  console.log(user);

  useEffect(() => {
    fetch(`/games`)
    .then(r => {
      if (r.ok) {
        r.json().then(allGames => setGames(allGames))
      } else {
        r.json().then(e => console.error(Object.keys(e)));
      }
    });
  }, []);

  const addNewGame = game => setGames(currentGames => [...currentGames, game]);
  const getGame = (id) => games.find(game => game.id === parseInt(id));

// if (!user) return <LoginForm />
//TENARY

  return (
    <>
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
        <Route
          path="/games"
          element={<GamesContainer addNewGame={addNewGame} games={games} />}
        />

        <Route path="/games/:id" element={<GameDetail  games={games} />} />
      </Routes>
    </>
  );
}

export default App;
