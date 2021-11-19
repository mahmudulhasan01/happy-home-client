import React from "react";
import { Link } from "react-router-dom";
import "./notfound.css";

const NotFound = () => {
  return (
    <div>
      <div className="go-back">
        <button className="goback-btn">
          <Link className="back-btn" to="/home">
            GO to Home
          </Link>
        </button>
      </div>
      <img
        src="https://assets.materialup.com/uploads/41d26cb2-81d9-42c8-8364-fb6b6e399da7/animated_teaser.gif"
        alt=""
      />
    </div>
  );
};

export default NotFound;
