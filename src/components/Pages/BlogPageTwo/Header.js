import React from "react";

function Header() {
  return (
    <header>
      <div className="bg-dark-blue">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div style={{ paddingTop: "5.7rem" }}></div>
              <h5
                className="utility__text_60px text-white"
                style={{ fontWeight: "bold" }}
              >
                Blog
              </h5>
              <div style={{ paddingBottom: "5.7rem" }}></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
