import React from "react";
import "../style/HeroImage.scss";
import { Link } from "react-router-dom";

function HeroImage() {
  return (
    <div className="heroImageMainContainer">
      <div className="actionArea">
        <h2>Book Your Barber</h2>
        <p>Book and pay for haircuts with just a few clicks.</p>
        <Link to="/">
          <button>Explore More</button>
        </Link>
      </div>
    </div>
  );
}

export default HeroImage;
