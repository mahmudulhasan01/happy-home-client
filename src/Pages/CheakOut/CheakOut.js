import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import BookingModal from "../BookingModal/BookingModal";
import Footer from "../Shared/Navbar/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const CheakOut = () => {
  const { id } = useParams();
  const [apartmentDetails, setApartmentDetails] = useState({});
  const [bookingSuccess, setBookingSuccess] = useState(false);
  //   console.log(apartmentDetails);

  const {
    appartmentName,
    appartmentOwner,
    appartmentType,
    balconies,
    baths,
    bedroom,
    facing,
    furnishing,
    img,
    location,
  } = apartmentDetails;

  useEffect(() => {
    fetch(`https://blooming-cove-73809.herokuapp.com/apartment/${id}`)
      .then((res) => res.json())
      .then((data) => setApartmentDetails(data));
  }, [id]);

  const [openBooking, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);

  return (
    <>
      <div>
        <div className="">
          <Navbar />
          {bookingSuccess && (
            <Alert severity="success">
              Your Booking is Successfully added, We will Contact with you as
              Soon as.
            </Alert>
          )}
          <h3 className="fw-bold my-3">Please Confirm Your Booking</h3>
          <div className="container my-5">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <img className="img-fluid" src={img} alt="" />
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-start d-flex align-items-center">
                <div className="">
                  <h4>{appartmentName}</h4>
                  <h6>Address: {location}</h6>
                  <div
                    style={{
                      borderTop: "1px solid #E6E6E6",
                      marginBottom: "1px",
                      marginTop: "3px",
                      padding: "3px",
                      display: "block",
                    }}
                    className=""
                  >
                    <ul style={{ listStyleType: "none" }}>
                      <li
                        className=""
                        style={{
                          borderRight: "1px solid #E6E6E6",
                          display: "inline-block",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                        }}
                      >
                        {bedroom} room
                      </li>
                      <li
                        className=""
                        style={{
                          borderRight: "1px solid #E6E6E6",
                          display: "inline-block",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                        }}
                      >
                        {balconies} Belconis
                      </li>
                      <li
                        className=""
                        style={{
                          borderRight: "1px solid #E6E6E6",
                          display: "inline-block",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                        }}
                      >
                        {baths} bath
                      </li>
                    </ul>
                  </div>
                  <div
                    className=""
                    style={{
                      borderTop: "1px solid #E6E6E6",
                      padding: "3px",
                      display: "block",
                    }}
                  >
                    <h6>Owner: {appartmentOwner}</h6>
                  </div>
                  <div
                    className=""
                    style={{
                      borderTop: "1px solid #E6E6E6",
                      padding: "3px",
                      display: "block",
                    }}
                  >
                    <h6>Condition:</h6>
                    <p>
                      {facing} | {furnishing} | {appartmentType}
                    </p>
                  </div>

                  <div className="">
                    <button
                      onClick={handleBookingOpen}
                      className="btn fw-bold text-light w-50 py-2"
                      style={{ backgroundColor: "#2c6b72" }}
                    >
                      Confirm Booking
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </div>
      <BookingModal
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        apartmentDetails={apartmentDetails}
        setBookingSuccess={setBookingSuccess}
      ></BookingModal>
    </>
  );
};

export default CheakOut;
