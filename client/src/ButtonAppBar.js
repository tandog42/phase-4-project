import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Link to='/login' style={{ color:"red",textDecoration: 'none' }}>
          <Typography  variant="h3" component="div" sx={{ flexGrow: 1 }}>
         Games4Review
          </Typography>
          </Link> 
          <Button color="inherit"></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
  
}
