import { Grid, Paper, Avatar, TextField, Button } from "@mui/material";
import React, { useContext, useState} from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { UserContext } from "./Context/UserContext";

function LoginForm({ toggleForm }) {
  const {  errors,handleLoginSubmit} = useContext(UserContext);
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
})


const handleLoginChange = ({target: {name, value}}) => {
  setLoginData(currentUser => ({
      ...currentUser,
      [name]: value
  }))
}
   
  const paperStyle = {
    
    padding: 20,
    height: "50vh",
    width: 280,
    margin: "100px auto",
  };

  const avatarStyle = { color: "black", backgroundColor: "red" };
  return (
    <>
      <form onSubmit={(e) => handleLoginSubmit(e, loginData)}>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>Sign in</h2>
            </Grid>
            <TextField
              onChange={handleLoginChange}
              name="username"
              id="standard-basic"
              label="Username"
              value={loginData.username}
              variant="standard"
              fullWidth
            />
            <TextField
              onChange={handleLoginChange}
              name="password"
              id="standard-basic"
              label="Password"
              variant="standard"
              value={loginData.password}
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
