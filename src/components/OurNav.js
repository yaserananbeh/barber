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
            <Link to="/" onClick={() => setToggleNavMenu(false)}>
              Barbers
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setToggleNavMenu(false)}>
              Store
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
              <Link to="/" onClick={() => setToggleNavMenu(false)}>
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
