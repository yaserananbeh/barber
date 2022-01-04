import React from "react";
import "../style/Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footerMainContainer">
      <div className="footerColsContainer">
        <div className="footerColumn">
          <div className="footerSiteName">
            <h3>Barber</h3>
          </div>
          <div className="footerSiteDesc">
            Getting your haircut has never been easier. Find talented barbers
            anywhere, anytime. Book and pay for haircuts with just a few clicks.
          </div>
        </div>
        <div className="footerColumn">
          <div className="footerSiteName">
            <h3>Links</h3>
          </div>
          <div className="footerColPagesLinks">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Find a barber</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerColumn">
          <div className="footerColTitle">
            <h3>Follow Us</h3>
          </div>
          <div className="footerColLinks">
            <a
              href="https://web.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-square fa-3x"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram-square fa-3x"></i>
            </a>
            <a
              href="https://github.com/yaserananbeh/barber"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github-square fa-3x"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="copyRightArea">ALL RIGHT RESERVED 2021 &copy;</div>
    </div>
  );
}

export default Footer;
