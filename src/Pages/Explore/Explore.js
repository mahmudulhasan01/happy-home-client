import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Shared/Navbar/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Explore = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch("https://blooming-cove-73809.herokuapp.com/apartments")
      .then((res) => res.json())
      .then((data) => setApartments(data));
  }, []);
  return (
    <div>
      <Navbar></Navbar>

      <div>
        <div className="container">
          <div className="row">
            {apartments.map((apartment) => (
              <div
                key={apartment._id}
                className="col-md-4 col-sm-12 col-lg-4 my-4"
              >
                <div className="card">
                  <img src={apartment.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{apartment.appartmentName}</h5>
                  </div>
                  <div className="card-footer">
                    <NavLink to={`/apartment/${apartment._id}`}>
                      <button className="btn btn-warning me-2 fw-bold text-black-50">
                        See Details
                      </button>
                    </NavLink>
                    <NavLink to={`/cheakout/${apartments._id}`}>
                      <button
                        className="btn fw-bold text-light w-50 py-2"
                        style={{ backgroundColor: "#2c6b72" }}
                      >
                        Booking Now
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Explore;
