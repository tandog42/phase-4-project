import { Grid, Paper, Avatar, TextField,Button } from "@mui/material";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
function LoginForm() {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "red" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign in</h2>
        </Grid>
        <TextField id="standard-basic" label="Username" variant="standard" fullWidth />
        <TextField id="standard-basic" label="Password" variant="standard" fullWidth/>
     
      
       <Button id="loginButton" type="submit" color="primary" variant="contained" fullWidth>Sign in</Button>

      </Paper>
    </Grid>
  );
}

export default LoginForm;
