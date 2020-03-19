import React from "react";

// npm
import { Link } from "react-router-dom";

function CompanyInformation() {
  return (
    <header className="header__information">
      <div className="container">
        <div className="row ">
          <div className="col-lg-8">
            <div className="header__text-information">
              <div style={{ marginTop: "17.2rem" }}></div>
              <h2>URUSAN LEGAL JADI LEBIH GAMPANG DENGAN HAKITA</h2>
              <div style={{ marginTop: "4.4rem" }}></div>
              <Link to="/blog">
                <button
                  className="btn btn-primary btn-lg  py-4 px-5 utility__text-decoration_underline utility__text_16px "
                  style={{
                    marginBottom: "16rem",
                    fontWeight: 600,
                    borderRadius: "5%"
                  }}
                >
                  Baca Artikel
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default CompanyInformation;
