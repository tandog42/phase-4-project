import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    fetch("/me").then(res => {
      if (res.ok) {
        res.json().then(user => setUser(user));
      }
    });
  }, []);

  

  function handleLoginSubmit(e, loginData) {
    e.preventDefault();

    fetch(`/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    }).then(res => {
      if (res.ok) {
        res
          .json()
          .then(user => setUser(user))
          .then(nav("/games"));
      } else {
        res.json().then(err => setErrors(Object.entries(err.error)));
      }
    });
  }

  function handleSubmit(e, signupData) {
    e.preventDefault();
    fetch(`/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signupData),
    }).then(res => {
      if (res.ok) {
        res
          .json()
          .then(newUser => setUser(newUser))
          .then(nav("/games"));
      } else {
        res.json().then(json => setErrors(Object.entries(json.error)));
      }
    });
  }
  function onClickLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(r => {
      if (r.ok) {
        setUser(null);
      } else {
        r.json().then(e => alert(e.errors));
      }
    });
  }
  
  return (
    <UserContext.Provider
      value={{
        errors,
        user,
        setUser,
        handleLoginSubmit,
        handleSubmit,
        onClickLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export { UserContext, UserProvider };
