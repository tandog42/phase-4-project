import React, { useContext, useState } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { UserContext } from "./Context/UserContext";
function Signup({ toggleForm }) {
  const { handleSubmit, errors } = useContext(UserContext);
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
  });

  const handleSignupChange = ({ target: { name, value } }) => {
    setSignupData(newUser => ({
      ...newUser,
      [name]: value,
    }));
  };

  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 280,
    margin: "100px auto",
  };

  const avatarStyle = { backgroundColor: "red" };
  return (
    <>
      <form onSubmit={e => handleSubmit(e, signupData)}>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>Sign up</h2>
            </Grid>
            <TextField
              onChange={handleSignupChange}
              className="standard-basic"
              name="username"
              label="Create a Username..."
              variant="standard"
              fullWidth
            />
            <TextField
              onChange={handleSignupChange}
              name="password"
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
            {errors}
          </Paper>
        </Grid>
      </form>
    </>
  );
}
export default Signup;
