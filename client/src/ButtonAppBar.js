import  React, {useContext} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { UserContext } from './Context/UserContext';
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
const {user} = useContext(UserContext)
const {onClickLogout} = useContext(UserContext)
 
  
  return user ? (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ color: "red", textDecoration: "none" }}>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
              Games4Review
            </Typography>
          </Link>
          <Link to="/games" style={{ color: "red", textDecoration: "none" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Games
            </Typography>
          </Link>

          <button id="logout-Btn" onClick={onClickLogout}>
            <a href="/" className="href">
              Logout
            </a>
          </button>
        </Toolbar>
      </AppBar>
    </Box>
  ) : (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ color: "red", textDecoration: "none" }}>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
              Games4Review
            </Typography>
          </Link>
          {/* <Link to='/games' style={{ color:"red",textDecoration: 'none' }}>
          <Typography  variant="h3" component="div" sx={{ flexGrow: 1 }}>
        Games
          </Typography>
          </Link>  */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
