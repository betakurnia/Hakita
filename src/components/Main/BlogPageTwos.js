import React, { Fragment, useRef, useEffect } from "react";

// npm
import { Link } from "react-router-dom";

// components
import BlogPageTwo from "../Pages/BlogPageTwo/BlogPageTwo";
import Footer from "../Layout/Footer";

// image
import logo_hakita_hi_res from "../../Image/helper/logo_hakita_hi_res-19.png";

function BlogPageTwos() {
  const myRef = useRef(null);

  function scrollToBottom() {
    myRef.current.scrollIntoView();
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });

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
                src={logo_hakita_hi_res}
                className="img-fluid"
                alt="logo_hakita_hi_res-19"
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
              <a class="nav-link" onClick={scrollToBottom}>
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="//#services">
                Services
              </a>
            </li>

            <li class="nav-item">
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={scrollToBottom}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <BlogPageTwo />
      <div
        id="/#footer"
        className="container-fluid"
        style={{ paddingTop: "7rem" }}
      >
        <Footer />
      </div>
      <div ref={myRef}></div>
    </Fragment>
  );
}

export default BlogPageTwos;
