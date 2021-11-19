import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://blooming-cove-73809.herokuapp.com/rating")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  //   var options = [
  //     { name: "One", assigned: true },
  //     { name: "Two", assigned: false },
  //     { name: "Three", assigned: true },
  //   ];

  const five = reviews.filter(function (review) {
    return review.value === 5;
  });
  const four = reviews.filter(function (review) {
    return review.value === 4;
  });
  const three = reviews.filter(function (review) {
    return review.value === 3;
  });
  const two = reviews.filter(function (review) {
    return review.value === 2;
  });
  const one = reviews.filter(function (review) {
    return review.value === 1;
  });

  return (
    <div className="my-5">
      <h3>Reviews</h3>
      <div className="">
        <div className="">
          {" "}
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Typography component="legend"></Typography>
            <Rating name="read-only" value={5} readOnly />
            <span> ({five.length}) person</span>
          </Box>
        </div>
        <div className="">
          {" "}
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Typography component="legend"> </Typography>
            <Rating name="read-only" value={4} readOnly />
            <span> ({four.length}) person</span>
          </Box>
        </div>
        <div className="">
          {" "}
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Typography component="legend"></Typography>

            <Rating name="read-only" value={3} readOnly />
            <span> ({three.length}) person</span>
          </Box>
        </div>
        <div className="">
          {" "}
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Typography component="legend"></Typography>
            <Rating name="read-only" value={2} readOnly />
            <span> ({two.length}) person</span>
          </Box>
        </div>
        <div className="">
          {" "}
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Typography component="legend"></Typography>
            <Rating name="read-only" value={1} readOnly />
            <span> ({one.length}) person</span>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Review;
