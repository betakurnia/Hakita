import React from "react";

// npm
import { Link } from "react-router-dom";

function SocialMedia() {
  const desktop = (
    <div className=" bg-white p-3 shadow-lg">
      <div className="container" style={{ padding: 0 }}>
        <div className="row ">
          <div className="col-lg-12 ">
            <div className="d-flex justify-content-between  ">
              <div>
                <i
                  class="fa fa-envelope text-dark-blue"
                  style={{ fontSize: "1.8rem" }}
                ></i>
                <p
                  className="ml-3"
                  style={{ fontSize: "1.4rem", display: "inline" }}
                >
                  Email:{" "}
                  <a
                    href="https://mailto:info@hakita.com?Subject=hakita"
                    className="utility__text-decoration_underline_black text-black "
                  >
                    info@hakita.com
                  </a>
                </p>
              </div>
              <div>
                <Link to="/signin">
                  <p
                    className="utility__text_16px  d-inline text-black utility__custom-text-hover-dark-blue"
                    id="signin"
                  >
                    Sign in
                  </p>
                </Link>
                <Link to="/signup">
                  <p
                    className="utility__text_16px  d-inline text-black utility__custom-text-hover-dark-blue ml-5"
                    id="signup"
                  >
                    Sign up
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return <div>{desktop}</div>;
}

export default SocialMedia;
