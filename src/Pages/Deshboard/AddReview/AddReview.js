import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import useAuth from "../../../Hooks/useAuth";
import { Alert, Button } from "@mui/material";

const AddReview = () => {
  const [value, setValue] = React.useState(1);
  const [success, setSuccess] = useState(false);
  const { user } = useAuth();
  const review = { value: value, user: user };

  const handleRatingSubmit = (review) => {
    fetch("http://localhost:5000/rating", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setSuccess(true);
        }
      });
  };

  return (
    <div>
      <h4 className="fw-bold">Plese Give me a Rating About Us</h4>
      {success && (
        <Alert severity="success">Your Review successfully Added!</Alert>
      )}
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography component="legend">Select your Rating</Typography>
        <Rating
          style={{ fontSize: "300%", margin: "20px" }}
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
      <Button variant="contained" onClick={() => handleRatingSubmit(review)}>
        Submit
      </Button>
    </div>
  );
};

export default AddReview;
