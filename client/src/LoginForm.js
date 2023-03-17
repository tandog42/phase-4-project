import { Grid, Paper, Avatar, TextField, Button } from "@mui/material";
import React, { useContext} from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { UserContext } from "./Context/UserContext";

function LoginForm({ toggleForm }) {
  const {  errors,handleLoginSubmit,  setUsername,  setPassword } = useContext(UserContext);

   
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };

  const avatarStyle = { color: "black", backgroundColor: "red" };
  return (
    <>
      <form onSubmit={(handleLoginSubmit)}>
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
              variant="contained"
              fullWidth
            >
              Sign in
            </Button>

            <Button
              id="accButton"
              type="submit"
              variant="contained"
              fullWidth
              onClick={() => toggleForm("register")}
            >
              Create Account
            </Button>
            {errors}
          </Paper>
        </Grid>
      </form>
    </>
  );
}

export default LoginForm;
