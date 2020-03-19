import React from "react";

function CompanyMission() {
  return (
    <div className="container">
      <div style={{ marginTop: "16rem" }}></div>
      <div className="row">
        <div className="col-lg-4">
          <div className="row">
            <div className="col-lg-3">
              <img
                src="../../Image/landing/user.icon.png"
                alt="user.icon"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-9">
              <h5 className="header__text-company">We Meet People’s Needs</h5>
              <p className="mt-5 utility__text_16px">
                Kami sadar bahwa hukum masih dianggap sebagai sesuatu yang
                menakutkan dan belum terjangkau untuk semua golongan. Inilah
                mengapa kami ada; untuk melawan stigma dan menjawab segala
                kebutuhan legal Anda.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row">
            <div className="col-lg-3">
              <img
                src="./Image/landing/protect_icon_x2.png"
                alt="protect_icon_x2"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-9">
              <h5 className="header__text-company">We Provide Protection</h5>
              <p className="mt-5 utility__text_16px">
                Dibantu oleh praktisi hukum dengan pengalaman lebih dari 10
                tahun, HAKITA memastikan bahwa Anda mendapatkan perlindungan
                hukum yang sesuai dengan hak Anda sebagai warga negara.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row">
            <div className="col-lg-3">
              <img
                src="./Image/landing/trust_icon_x2.png"
                alt="trust_icon_x2"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-9">
              <h5 className="header__text-company">We Are Trustworthy</h5>
              <p className="mt-5 utility__text_16px">
                HAKITA hadir karena kami percaya bahwa hukum adalah hak semua
                orang. Semua yang kami lakukan di HAKITA selalu selaras dengan
                misi kami untuk menjadikan hukum sebagai sesuatu yang mudah
                dimengerti dan dapat diakses oleh semua orang.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "14rem" }}></div>
    </div>
  );
}

export default CompanyMission;
