import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Apartments = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch("https://blooming-cove-73809.herokuapp.com/apartments")
      .then((res) => res.json())
      .then((data) => setApartments(data));
  }, []);
  return (
    <div>
      <h3 className="mt-4">Our top Apartments</h3>
      <div className="container">
        <div className="row">
          {apartments.slice(0, 6).map((apartment) => (
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
                  <Link to={`/apartment/${apartment._id}`}>
                    <button className="btn btn-warning me-2 fw-bold text-black-50">
                      See Details
                    </button>
                  </Link>
                  <NavLink to={`/cheakout/${apartment._id}`}>
                    <button
                      className="btn fw-bold text-black-50"
                      style={{ backgroundColor: "#89c6d6" }}
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
  );
};

export default Apartments;
