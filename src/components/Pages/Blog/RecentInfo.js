import React, { Fragment } from "react";

// components
import SearchButton from "../../Common/SearchButton";
import RecentBlog from "../../Common/RecentBlog";
import RecentComment from "../../Common/RecentComment";

function RecentInfo() {
  return (
    <Fragment>
      <SearchButton />
      <h5 className=" utility__text_17px mt-5">Recent Blog</h5>
      <RecentBlog
        imageSource="./Image/blog/perlindungan-belanja-online-penipu-online-hakita-scaled-160x160.jpg"
        imageName="perlindungan-belanja-online-penipu-online-hakita-scaled-160x160"
        title="Perlindungan Hukum Dalam Belanja Online"
        date="March 17, 2020"
      />
      <RecentBlog
        imageSource="./Image/helper/340719-200.png"
        imageName="340719-200"
        title="Aturan Razia Secara Hukum"
        date="March 17, 2020"
      />
      <RecentBlog
        imageSource="./Image/blog/konvoi-mobil-motor-indonesia-hukum-hakita-scaled-160x160.jpg"
        imageName="konvoi-mobil-motor-indonesia-hukum-hakita-scaled-160x160.jpg"
        title="Konvoi Mobil dan Motor di Indonesia, Apa Aturannya?"
        date="March 17, 2020"
      />
      <RecentBlog
        imageSource="./Image/blog/Penilangan-Tanpa-Surat-Tugas-Polisi-Hakita-160x160.png"
        imageName="Penilangan-Tanpa-Surat-Tugas-Polisi-Hakita-160x160"
        title="Apakah Polisi Boleh Menilang Tanpa Surat Tugas?"
        date="March 17, 2020"
      />
      <RecentBlog
        imageSource="./Image/helper/340719-200.png"
        imageName="340719-200"
        title="Apakah Polisi Boleh Melakukan Pengeledahan Tanpa Surat Izin?"
        description="
       Bagi pengguna jalan sehari-hari, kita sudah tidak asing lagi dengan razia dan penilangan yang biasa dilakukan polisi. Di artikel kali ini, HAKITA akan membahas tentang prosedur penilangan dan apa hak Anda sebagai warga negara jika terjadi pemeriksaan di jalan.
       "
        date="March 17, 2020"
      />
      <RecentComment />
    </Fragment>
  );
}

export default RecentInfo;
