import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
function Signup({ toggleForm }) {
  const [username, setName] = useState("");
  const [password, setPass] = useState("");
  const [errors, setErrors] = useState([])
  const nav = useNavigate()
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };

  function handleSubmit(e) {
    e.preventDefault();

    const user = {
      username,
      password
    }
    fetch(`/users`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(user)
    })
    .then(res => {
        if(res.ok){
            res.json().then(u => ( nav("/games")))
        }else {
            res.json().then(json => setErrors(Object.entries(json.errors)))
        }
    })}

  const avatarStyle = { backgroundColor: "red" };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>Sign up</h2>
            </Grid>
            <TextField
              onChange={e => setName(e.target.value)}
              id="standard-basic"
              label="Create a Username..."
              variant="standard"
              fullWidth
            />
            <TextField
              onChange={e => setPass(e.target.value)}
              id="standard-basic"
              label="Create a Password..."
              variant="standard"
              fullWidth
            />

            <Button
              id="signupButton"
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
            >
              Submit
            </Button>
            <Button
              id="accButton"
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
              onClick={() => toggleForm("login")}
            >
              Already have Account?
            </Button>
      {errors ? errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
          </Paper>
        </Grid>
      </form>
    </>
  );
}
export default Signup;
