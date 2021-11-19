import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Navbar from "../../Shared/Navbar/Navbar";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, isLoading, loginUser, singInUseingGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleLogin = () => {
    singInUseingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <Box>
      <Navbar></Navbar>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        <Box>
          <h1>Please Login</h1>

          <Container>
            <Grid container spacing={2}>
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Email"
                  name="email"
                  onChange={handleOnChange}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Password"
                  type="password"
                  name="password"
                  onChange={handleOnChange}
                  variant="standard"
                />

                <Button
                  sx={{ width: "75%", m: 1 }}
                  type="submit"
                  variant="contained"
                >
                  Login
                </Button>
                <NavLink style={{ textDecoration: "none" }} to="/register">
                  <Button variant="text">New User? Please Register</Button>
                </NavLink>
                {isLoading && <CircularProgress />}
                {user?.email && (
                  <Alert severity="success">Login successfully!</Alert>
                )}
                {/* {authError && <Alert severity="error">{authError}</Alert>} */}
              </form>
            </Grid>
          </Container>
          <button
            onClick={handleGoogleLogin}
            className="bg-dark rounded p-1 px-3 me-4 btn"
          >
            <i className="fab fa-google text-warning fs-3"></i>
          </button>
          <button
            onClick={handleGoogleLogin}
            className="bg-dark rounded p-1 px-3 me-4 btn"
          >
            <i className="fab fa-google text-warning fs-3"></i>
          </button>
          <button
            onClick={handleGoogleLogin}
            className="bg-dark rounded p-1 px-3 me-4 btn"
          >
            <i className="fab fa-google text-warning fs-3"></i>
          </button>
        </Box>
      </div>
    </Box>
  );
};

export default Login;
