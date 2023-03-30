import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Context/UserContext"
import { GameProvider } from "./Context/GameContext";

ReactDOM.render(
  <BrowserRouter>
  <GameProvider>
  <UserProvider>
    <App />
    </UserProvider>
    </GameProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
