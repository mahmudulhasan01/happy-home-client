import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Footer from "../Shared/Navbar/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Apartment = () => {
  const { id } = useParams();
  const [apartmentDetails, setApartmentDetails] = useState({});
  console.log(apartmentDetails);

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
    fetch(`http://localhost:5000/apartment/${id}`)
      .then((res) => res.json())
      .then((data) => setApartmentDetails(data));
  }, [id]);

  return (
    <div className="">
      <Navbar />
      <div className="container my-4">
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
                <NavLink to={`/cheakout/${apartmentDetails._id}`}>
                  <button
                    className="btn fw-bold text-light w-50 py-2"
                    style={{ backgroundColor: "#ed8e00" }}
                  >
                    Booking Now
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Apartment;
