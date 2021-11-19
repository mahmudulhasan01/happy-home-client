import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setsuccess] = useState(false);
  const { token } = useAuth();

  const handleOnBlure = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setsuccess(true);
          console.log(data);
        }
      });
    e.preventDefault();
  };

  return (
    <div>
      <h2>Make a Admin</h2>

      <form onSubmit={handleAdminSubmit}>
        <TextField
          style={{ width: "50%" }}
          label="Email"
          type="email"
          // value=""
          onBlur={handleOnBlure}
          variant="standard"
        />

        <Button
          style={{ marginLeft: "10px" }}
          type="submit"
          variant="contained"
        >
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Admine Successfully Created</Alert>}
    </div>
  );
};

export default MakeAdmin;
