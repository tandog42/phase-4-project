import { Grid, Paper, Avatar, TextField,Button } from "@mui/material";
import React, { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";



function LoginForm() {
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
console.log( username)
console.log(password)
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };

  function handleLoginSubmit(e) {
    e.preventDefault()
    fetch()
  }

  
  const avatarStyle = { backgroundColor: "red" };
  return (
    <form onSubmit={handleLoginSubmit} >
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign in</h2>
        </Grid>
        <TextField onChange={e => setUsername(e.target.value)}id="standard-basic" label="Username" variant="standard" fullWidth />
        <TextField onChange={e => setPassword(e.target.value)}id="standard-basic" label="Password" variant="standard" fullWidth/>
     
      
       <Button id="loginButton" type="submit" color="primary" variant="contained" fullWidth>Sign in</Button>

      </Paper>
    </Grid>

    </form>


  );
}

export default LoginForm;
