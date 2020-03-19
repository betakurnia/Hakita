import React from "react";

import AboutUs from "./AboutUs";

function Footer() {
  return (
    <div className="bg-light-dark">
      <div className="container ">
        <div className="row " style={{ paddingTop: "9rem" }}>
          <AboutUs />

          <div className="col-lg-4 ">
            <h6 className="text-white utility__text_20px">Contact us</h6>
            <p
              className="text-footer "
              style={{ marginTop: "3rem", lineHeight: "2.5rem" }}
            >
              Mail:{" "}
              <a
                className="utility__text-decoration_underline_gray "
                href="/#/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#777777" }}
              >
                info@hakita.com
              </a>{" "}
              Jl. Boulevard Barat <br />
              Raya No.27, RW. 9, Kelapa Gading Barat - Jakarta Utara 14240
            </p>

            <div style={{ marginTop: "2.7rem" }}></div>
            <a
              href="https://www.facebook.com/hakita.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="	fa fa-facebook  text-gray mr-4 "
                style={{ fontSize: "2.2rem" }}
              ></i>
            </a>
            <a
              href="https://www.instagram.com/hakita.id/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fa fa-instagram  text-gray utility__text-decoration_underline"
                style={{ fontSize: "2.2rem" }}
              ></i>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black-dark  py-5 ">
        <p className="text-center text-footer">
          {" "}
          &copy; PT Hakita Indonesia, {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}

export default Footer;
