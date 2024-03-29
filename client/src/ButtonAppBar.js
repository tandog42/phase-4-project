import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { UserContext } from "./Context/UserContext";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  const { onClickLogout, user } = useContext(UserContext);


  return user ? (
    <Box >
      <AppBar>
        <Toolbar>
          <Link to="/" style={{ color: "red", textDecoration: "none" }}>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
              Games4Review
            </Typography>
          </Link>
          <Link to="/games" id="games-Btn" style={{  textDecoration: "none" }}>
            <Typography sx={{ fontSize: 'h5.fontSize' }} >
              Games
            </Typography>
          </Link>

          <button id="logout-Btn" onClick={onClickLogout}>
            Logout
          </button>
        </Toolbar>
      </AppBar>
    </Box>
  ) : (
    <Box>
      <AppBar>
        <Toolbar>
          <Link to="/" style={{ color: "red", textDecoration: "none" }}>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
              Games4Review
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
