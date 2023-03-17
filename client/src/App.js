import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from './Context/UserContext';
import ButtonAppBar from "./ButtonAppBar";
import LoginForm from "./LoginForm";
import Signup from "./Signup";
import GamesContainer from "./GamesContainer";
import GameDetail from "./GameDetail";
import ReviewsCard from "./ReviewsCard";


function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const [games, setGames] = useState([]);
  const {user, setUser} = useContext(UserContext)
  const toggleForm = formName => setCurrentForm(formName);

  useEffect(() => {
    fetch(`/games`)
      .then(r => r.json())
      .then(games => setGames(games));
  }, []);


  
   if (!user) return <LoginForm />;

  return (
    <div className="App">
      
      <ButtonAppBar  />
      <Routes>
        <Route
          path="/games"
          element={<GamesContainer  games={games} />}
        />

        <Route path="/games/:id" element={<GameDetail games={games} />} />
        <Route path="/games/:id/reviews" element={<ReviewsCard />}></Route>
        <Route
          exact
          path="/"
          element={
            currentForm === "login" ? (
              <LoginForm  toggleForm={toggleForm} />
            ) : (
              <Signup  toggleForm={toggleForm} />
            )
          }
        />
      </Routes>
      
    </div>
  );
}

export default App;
