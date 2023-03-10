import { Grid, Paper, Avatar, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function LoginForm({ toggleForm }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };

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
        res.json().then(user => console.log(user));
      } else {
        res.json().then(json => setErrors(Object.entries(json.errors)));
      }
    });
  }
  const avatarStyle = { backgroundColor: "red" };
  return (
    <>
      <form onSubmit={handleLoginSubmit}>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>Sign in</h2>
            </Grid>
            <TextField
              onChange={e => setUsername(e.target.value)}
              id="standard-basic"
              label="Username"
              variant="standard"
              fullWidth
            />
            <TextField
              onChange={e => setPassword(e.target.value)}
              id="standard-basic"
              label="Password"
              variant="standard"
              fullWidth
            />

            <Button
              id="loginButton"
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
            >
              Sign in
            </Button>
            <Button
              id="accButton"
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
              onClick={() => toggleForm("register")}
            >
              Create Account
            </Button>
            {errors ? <div>{errors}</div> : null}
          </Paper>
        </Grid>
      </form>
      {/* {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null} */}
    </>
  );
}

export default LoginForm;
