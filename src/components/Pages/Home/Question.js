import React from "react";

function Question() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div style={{ marginTop: "7.4rem" }}></div>
            <h5
              className="utility__text_48px text-center"
              style={{ fontWeight: 800 }}
            >
              Have a question?
            </h5>
            <div style={{ marginTop: "5.3rem" }}></div>
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="bg-white shadow-lg  text-center"
                  style={{
                    borderRadius: "4%",
                    paddingTop: "5rem",
                    paddingBottom: "5rem",
                    height: "25rem"
                  }}
                >
                  <div className="row">
                    <div className="col-lg-3 mx-auto ">
                      <div
                        className="bg-dark-blue  d-flex justify-content-center"
                        style={{ borderRadius: "70%", height: "6.4rem" }}
                      >
                        <i
                          class="fa fa-envelope text-white  align-self-center"
                          style={{ fontSize: "2.5rem" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4"></div>
                  <a
                    href="https://mailto:info@hakita.com?Subject=hakita"
                    className="text-center utility__text-decoration_underline_black text-black utility__text_16px"
                    style={{ fontWeight: "bold" }}
                  >
                    info@hakita.com
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="bg-white shadow-lg  text-center "
                  style={{
                    borderRadius: "4%",
                    paddingTop: "5rem",
                    paddingBottom: "5rem",
                    height: "25rem"
                  }}
                >
                  <div className="row">
                    <div className="col-lg-3 mx-auto ">
                      <div
                        className="bg-dark-blue  d-flex justify-content-center"
                        style={{ borderRadius: "70%", height: "6.4rem" }}
                      >
                        <i
                          class="fa fa-map-marker text-white  align-self-center"
                          style={{ fontSize: "2.5rem" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4"></div>
                  <p
                    href="/#"
                    className="text-center  text-black utility__text_16px"
                  >
                    <div className="row">
                      <div className="col-lg-9 mx-auto">
                        <p style={{ fontWeight: "bold" }}>
                          {" "}
                          Jl. Boulevard Barat Raya No. 27, Kelapa Gading Barat,
                        </p>
                        <p style={{ fontWeight: "bold" }}> Jakarta Utara</p>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "8rem" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
