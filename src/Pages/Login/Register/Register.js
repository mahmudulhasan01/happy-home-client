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
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Navbar from "../../Shared/Navbar/Navbar";

const Register = () => {
  const [loginData, setLoginData] = useState({});

  const {
    user,
    registerUsingEmailPassword,
    loginUsingGoogle,
    isLoading,
    // authError,
  } = useAuth();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUsingEmailPassword(
      loginData.email,
      loginData.password2,
      loginData.name
    );
    e.preventDefault();
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
          <h1>Please Register</h1>

          <Container>
            <Grid container spacing={2}>
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Name"
                  name="name"
                  onChange={handleOnChange}
                  variant="standard"
                />
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
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Re-Type Your Password"
                  type="password"
                  name="password2"
                  onChange={handleOnChange}
                  variant="standard"
                />
                <Button
                  sx={{ width: "75%", m: 1 }}
                  type="submit"
                  variant="contained"
                >
                  Register
                </Button>
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  <Button variant="text">Already Register? Please login</Button>
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
            onClick={loginUsingGoogle}
            className="bg-dark rounded p-1 px-3 me-4 btn"
          >
            <i className="fab fa-google text-warning fs-3"></i>
          </button>
          <button
            onClick={loginUsingGoogle}
            className="bg-dark rounded p-1 px-3 me-4 btn"
          >
            <i className="fab fa-google text-warning fs-3"></i>
          </button>
          <button
            onClick={loginUsingGoogle}
            className="bg-dark rounded p-1 px-3 me-4 btn"
          >
            <i className="fab fa-google text-warning fs-3"></i>
          </button>
        </Box>
      </div>
    </Box>
  );
};

export default Register;
