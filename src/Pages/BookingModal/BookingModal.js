import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import useAuth from "../../Hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({
  openBooking,
  handleBookingClose,
  apartmentDetails,
  setBookingSuccess,
}) => {
  const { appartmentName, _id, appartmentType, location } = apartmentDetails;

  const type = appartmentType;
  const loc = location;
  console.log(type, loc);

  const { user } = useAuth();
  const initialInfo = {
    claintName: user.displayName,
    email: user.email,
    phone: "",
  };

  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  };
  //   ---------------------------
  const handleBookingSubmit = (e) => {
    // collect data
    const booking = {
      ...bookingInfo,
      apartmentName: appartmentName,
      apartmentType: appartmentType,
      id: _id,
      apartmentDetails: apartmentDetails,
    };
    // send to the server
    fetch("https://blooming-cove-73809.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log(data.insertedId);
          setBookingSuccess(true);
          handleBookingClose();
        }
      });

    e.preventDefault();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {appartmentName}
            </Typography>
            <form onSubmit={handleBookingSubmit}>
              <TextField
                sx={{ width: "90%", m: 1 }}
                id="outlined-size-small"
                name="Name"
                onBlur={handleOnBlur}
                defaultValue={user.displayName}
                size="small"
              />
              <TextField
                sx={{ width: "90%", m: 1 }}
                id="outlined-size-small"
                name="email"
                onBlur={handleOnBlur}
                defaultValue={user.email}
                size="small"
              />
              <TextField
                disabled
                sx={{ width: "90%", m: 1 }}
                id="outlined-size-small"
                name="location"
                onBlur={handleOnBlur}
                defaultValue={loc}
                size="small"
              />
              <TextField
                disabled
                sx={{ width: "90%", m: 1 }}
                id="outlined-size-small"
                name="apartmentType"
                onBlur={handleOnBlur}
                defaultValue={type}
                size="small"
              />
              <TextField
                sx={{ width: "90%", m: 1 }}
                id="outlined-size-small"
                name="phone"
                onBlur={handleOnBlur}
                defaultValue="Phone Number"
                size="small"
              />

              <Button type="submit" variant="contained">
                Submit
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default BookingModal;
