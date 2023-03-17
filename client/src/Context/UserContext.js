import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  const nav = useNavigate();

  useEffect(() => {
    fetch("/me")
    .then(res => {
      if (res.ok) {
        res.json().then(user => setUser(user));
      }
    });
  }, []);

  function handleLoginSubmit(e) {
    e.preventDefault();

    const user = {
    username,
    password,
    };

    fetch(`/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(res => {
      if (res.ok) {
        res.json().then(user => setUser(user))
          .then(nav("/games"))
      } else {
        res.json().then(err => setErrors(Object.entries(err.error)));
      }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const user = {
      username,
      password,
    };
    fetch(`/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(res => {
      if (res.ok) {
        res
          .json()
          .then(user => setUser(user))
          .then(() => nav("/games"));
      } else {
        res.json().then(json => setErrors(Object.entries(json.errors)));
      }
    });
  }
  function onClickLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(r => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <UserContext.Provider
      value={{  errors, user, setUser, handleLoginSubmit, handleSubmit, onClickLogout, setUsername, setPassword, password, username }}
    >
      {children}
    </UserContext.Provider>
  );
}
export { UserContext, UserProvider } 