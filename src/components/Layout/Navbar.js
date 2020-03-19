import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-sm bg-white text-dark py-4 "
      style={{ marginTop: "0.07rem" }}
    >
      <div className="container">
        <ul class="navbar-nav mr-auto">
          <a
            class="navbar-brand"
            href="#"
            style={{ paddingRight: "10rem !important" }}
          >
            <img
              src="./Image/helper/logo_hakita_hi_res-19.png"
              className="img-fluid"
              alt="favicon"
              style={{ height: "4.5rem", marginRight: "6rem" }}
            />
          </a>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#footer">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services">
              Services
            </a>
          </li>

          <li class="nav-item">
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#footer">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
