import React, { Fragment, useRef, useEffect } from "react";

// npm
import { Link } from "react-router-dom";

// components
import Header from "../Pages/Home/Header";
import CompanyMission from "../Pages/Home/CompanyMission";
import Services from "../Pages/Home/Services";
import Information from "../Pages/Home/Information";
import Blog from "../Pages/Home/Blog";
import Question from "../Pages/Home/Question";
import Footer from "../Layout/Footer";

function BlogPageTwo() {
  const divRref = useRef(null);

  useEffect(() => {
    document.title = "Hakita | Urusan legal jadi lebih gampang";
  });

  function scrollToBottom() {
    divRref.current.scrollIntoView();
  }

  return (
    <Fragment>
      <nav
        class="navbar navbar-expand-sm bg-white text-dark py-4 "
        style={{ marginTop: "0.07rem" }}
      >
        <div className="container">
          <ul class="navbar-nav mr-auto">
            <a
              class="navbar-brand"
              href="/#"
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
              <a class="nav-link" href="#footer" onClick={scrollToBottom}>
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
              <a class="nav-link" href="#footer" onClick={scrollToBottom}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <Header />
      <CompanyMission />
      <div style={{ paddingTop: "7rem", paddingBottom: "7rem" }}></div>
      <div id="services" class="container-fluid ">
        <Services />
      </div>
      <Information />
      <Blog />
      <Question />
      <div
        id="#footer"
        className="container-fluid"
        style={{ paddingTop: "2.6rem" }}
      >
        <Footer />
        <div ref={divRref}></div>
      </div>
    </Fragment>
  );
}

export default BlogPageTwo;
