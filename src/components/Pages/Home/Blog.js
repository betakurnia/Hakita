import React from "react";

// npm
import { Link } from "react-router-dom";

function Blog() {
  return (
    <article>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div style={{ marginTop: "8rem" }}></div>
            <h5
              className="utility__text_36px text-center"
              style={{ fontWeight: 800 }}
            >
              Love Reading, Keep Reading
            </h5>
            <p
              className="utility__text_16px text-center text-gray "
              style={{ marginTop: 68 }}
            >
              Punya pertanyaan soal hukum? Temukan jawabannya di blog HAKITA.
            </p>
          </div>

          <div className="row" style={{ marginTop: "8.7rem" }}>
            <div className="col-lg-4">
              <div
                className="bg-white shadow-lg px-5 "
                style={{
                  borderRadius: "4%",
                  paddingTop: "3.2rem",
                  paddingBottom: "3.2rem",
                  height: "25rem"
                }}
              >
                <div className="col-lg-5 bg-blue  py-2 px-1 ">
                  <p className="text-white utility__text_14px text-center">
                    Hakita News
                  </p>
                </div>
                <div className="col-lg-8"></div>
                <h5
                  className="text-left mt-4"
                  style={{ fontSize: "1.872rem", fontWeight: "bold" }}
                >
                  Perlindungan Hukum Dalam Belanja Online
                </h5>
                <p className=" text-gray utility__text_16px mt-4">Yesteday</p>
                <div className="mt-5"></div>
                <Link to="/blog">
                  <a
                    className="text-dark-blue utility__text-decoration_underline utility__text_16px"
                    href="/#"
                  >
                    Read more
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="bg-white shadow-lg px-5 "
                style={{
                  borderRadius: "4%",
                  paddingTop: "3.2rem",
                  paddingBottom: "3.2rem",
                  height: "25rem"
                }}
              >
                <div className="col-lg-5 bg-blue  py-2 px-1 ">
                  <p className="text-white utility__text_14px text-center">
                    Hakita News
                  </p>
                </div>
                <div className="col-lg-8"></div>
                <h5
                  className="text-left mt-4"
                  style={{ fontSize: "1.872rem", fontWeight: "bold" }}
                >
                  Aturan Razia Secara Hukum{" "}
                </h5>
                <p className=" text-gray utility__text_16px mt-4">Yesteday</p>
                <div className="mt-5"></div>
                <Link to="/blog">
                  <a
                    className="text-dark-blue utility__text-decoration_underline utility__text_16px"
                    href="/#"
                  >
                    Read more
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="bg-white shadow-lg px-5 "
                style={{
                  borderRadius: "4%",
                  paddingTop: "3.2rem",
                  paddingBottom: "3.2rem",
                  height: "25rem"
                }}
              >
                <div className="col-lg-5 bg-blue  py-2 px-1 ">
                  <p className="text-white utility__text_14px text-center">
                    Hakita News
                  </p>
                </div>
                <div className="col-lg-8"></div>
                <h5
                  className="text-left mt-4"
                  style={{ fontSize: "1.872rem", fontWeight: "bold" }}
                >
                  Konvoi Mobil dan Motor di Indonesia, Apa Aturannya?
                </h5>
                <p className=" text-gray utility__text_16px mt-4">Yesteday</p>
                <div className="mt-5"></div>
                <Link to="/blog">
                  <a
                    className="text-dark-blue utility__text-decoration_underline utility__text_16px"
                    href="/#"
                  >
                    Read more
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "6.3rem" }}></div>
        <div className="row">
          <div
            className="col-lg-3 mx-auto"
            style={{ border: "1px solid #0C0C0C" }}
          ></div>
        </div>
      </div>
    </article>
  );
}

export default Blog;
