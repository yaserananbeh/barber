import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/OurNav.scss";
function OurNav() {
  const [toggleNavMenu, setToggleNavMenu] = useState(false);
  return (
    <nav className="headerNavContainer">
      <div className="logoContainer">
        <Link to="/">Barber</Link>
      </div>
      <i
        className={!toggleNavMenu ? "fas fa-bars" : "fas fa-times"}
        onClick={() => setToggleNavMenu(!toggleNavMenu)}
      ></i>
      <div
        className={
          !toggleNavMenu ? "navLinksContainer" : "navLinksContainer active"
        }
      >
        <ul>
          <li>
            <Link to="/" onClick={() => setToggleNavMenu(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setToggleNavMenu(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/shop" onClick={() => setToggleNavMenu(false)}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setToggleNavMenu(false)}>
              About Us
            </Link>
          </li>
        </ul>
        <div className="accountWrapper">
          <ul>
            <li>
              <Link to="/login" onClick={() => setToggleNavMenu(false)}>
                Login/Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default OurNav;
