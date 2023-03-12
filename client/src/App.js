import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import ButtonAppBar from "./ButtonAppBar";
import LoginForm from "./LoginForm";
import Signup from "./Signup";
function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = formName => setCurrentForm(formName);

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
      </Routes>
    </div>
  );
}

export default App;
