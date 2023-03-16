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
  const [currentUser,setCurrentUser] = useState("")
  const toggleForm = formName => setCurrentForm(formName);

  useEffect(() => {
    fetch(`/games`)
      .then(r => r.json())
      .then(games => setGames(games));
  }, []);
  
  useEffect(() => {
    fetch("/auth")
    .then(res => {
      if(res.ok) {
        res.json().then(user => setCurrentUser(user))
      }
    })
  },[])

  function deleteGame(id) {
    console.log(id);
  }
if(!currentUser) return <LoginForm setCurrentUser={setCurrentUser}/>
  return (
    <div className="App">
      <ButtonAppBar />
      <Routes>
        <Route
          path="/games"
          element={<GamesContainer deleteGame={deleteGame} games={games} />}
        />
        <Route path="/games/:id" element={<Game />} />
        <Route
          exact
          path="/login"
          element={
            currentForm === "login" ? (
              <LoginForm toggleForm={toggleForm} />
            ) : (
              <Signup toggleForm={toggleForm} />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
