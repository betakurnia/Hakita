import React from "react";

function Services() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2
              className="utility__text_48px text-center"
              style={{ fontWeight: 800 }}
            >
              Product and Services
            </h2>
            <p className="utility__text_16px text-center ">
              <div style={{ marginTop: "6.8rem" }}></div>
              Apapun kebutuhan legal Anda, biar HAKITA yang urus.
            </p>
            <div style={{ marginTop: "5.3rem" }}></div>
            <div className="row">
              <div className="col-lg-4">
                <div
                  className="bg-white shadow-lg  text-center"
                  style={{
                    borderRadius: "4%",
                    paddingTop: "5rem",
                    paddingBottom: "5rem"
                  }}
                >
                  <img
                    src="./Image/landing/contract_icon.png"
                    alt="contract_icon"
                    className="img-fluid"
                    style={{ height: "8rem" }}
                  />
                </div>
                <h5
                  className="mt-5 text-center"
                  style={{ fontSize: "1.872rem", fontWeight: "bold" }}
                >
                  Jasa Pembuatan PT
                </h5>
                <p className="mt-5 text-center utility__text_16px">
                  Sekarang buat PT tidak harus mahal dan lama. Kami mengerti
                  bahwa bisnis Anda perlu dilindungi hukum. Di HAKITA, kami
                  membantu Anda membuat PT dengan proses yang cepat dan aman
                  dengan harga terjangkau.
                </p>
              </div>
              <div className="col-lg-4">
                <div
                  className="bg-white shadow-lg  text-center"
                  style={{
                    borderRadius: "4%",
                    paddingTop: "5rem",
                    paddingBottom: "5rem"
                  }}
                >
                  <img
                    src="./Image/landing/permission_icon.png"
                    alt="permission_icon"
                    className="img-fluid"
                    style={{ height: "8rem" }}
                  />
                </div>
                <h5
                  className="mt-5 text-center"
                  style={{ fontSize: "1.872rem", fontWeight: "bold" }}
                >
                  Otomasi Dokumen
                </h5>
                <p className="mt-5 text-center utility__text_16px">
                  Buat dokumen sudah tidak perlu ribet lagi. Dokumen yang biasa
                  butuh waktu berminggu-minggu sekarang bisa selesai dalam
                  hitungan menit dengan template dari HAKITA.
                </p>
              </div>
              <div className="col-lg-4">
                <div
                  className="bg-white shadow-lg  text-center"
                  style={{
                    borderRadius: "4%",
                    paddingTop: "5rem",
                    paddingBottom: "5rem"
                  }}
                >
                  <img
                    src="./Image/landing/agreement_icon.png"
                    alt="agreement_icon"
                    className="img-fluid"
                    style={{ height: "8rem" }}
                  />
                </div>
                <h5
                  className="mt-5 text-center"
                  style={{ fontSize: "1.872rem", fontWeight: "bold" }}
                >
                  Sistem Manajemen Dokumen
                </h5>
                <p className="mt-5 text-center utility__text_16px">
                  Kerja lebih efisien dengan HAKITA! Tidak hanya memantau ribuan
                  dokumen yang Anda miliki, teknologi kami juga dapat memberi
                  tahu Anda jika ada dokumen yang membutuhkan perhatian khusus
                  lewat fitur reminder kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "10.2rem" }}></div>
    </div>
  );
}

export default Services;
