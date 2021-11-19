import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { Link as NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Navbar = () => {
  const { user, Logout, admin } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            RENT YOUR HOME
          </Typography>
          <NavLink
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "700px",
            }}
            to="/home"
          >
            <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "700px",
            }}
            to="/explore"
          >
            <Button color="inherit">Explore</Button>
          </NavLink>

          {user?.email && (
            <NavLink
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "700px",
              }}
              to="/dashboard"
            >
              <Button color="inherit">Dashboard</Button>
            </NavLink>
          )}

          {admin && (
            <NavLink
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "700px",
              }}
              to="/admindashboard"
            >
              <Button color="inherit">Admin Dashboard</Button>
            </NavLink>
          )}

          {user?.email && (
            <span className="text-light">
              <img
                width="35px"
                className="rounded-circle"
                src={user?.photoURL}
                alt=""
              />{" "}
              {user?.displayName}
            </span>
          )}
          {user?.email ? (
            <Button
              style={{
                color: "white",
                fontWeight: "bold",
                marginRight: "5px",
              }}
              onClick={Logout}
            >
              Logout
            </Button>
          ) : (
            <NavLink
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "700px",
              }}
              to="/login"
            >
              <Button color="inherit">Login</Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
