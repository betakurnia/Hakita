import React, { Fragment, useEffect } from "react";

// components
import HeaderBlog from "./HeaderBlog";
import BlogArticle from "./BlogArticle";
import Pagination from "./Pagination";
import RecentInfo from "./RecentInfo";

function Blog() {
  useEffect(() => {
    document.title =
      "Blog Hakita - Punya pertanyaan soal hukum? Temukan jawabannya di ...";
    window.scrollTo(0, 0);
  });

  return (
    <Fragment>
      <HeaderBlog />
      <div style={{ marginTop: "7rem" }}></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <BlogArticle
              imageSource="./Image/blog/perlindungan-belanja-online-penipu-online-hakita-scaled-770x400.jpg"
              imageName="perlindungan-belanja-online-penipu-online-hakita-scaled-770x400"
              title="Perlindungan Hukum Dalam Belanja Online"
              date="2 day ago in"
              description="
        Di zaman sekarang, belanja online sudah menjadi hal yang biasa dilakukan. Tetapi, kita harus tetap hati-hati dengan adanya penipuan online."
            />
            <BlogArticle
              title="Aturan Razia Secara Hukum"
              date="2 day ago in"
              description="
        Razia sudah sering menjadi berita di Indonesia. Yang paling sering didengar adalah razia tempat hiburan seperti bar, hotel, dan restoran. Tetapi apakah razia memiliki dasar hukum?"
            />
            <BlogArticle
              imageSource="./Image/blog/konvoi-mobil-motor-indonesia-hukum-hakita-scaled-770x400.jpg"
              imageName="konvoi-mobil-motor-indonesia-hukum-hakita-scaled-770x400"
              title="Konvoi Mobil dan Motor di Indonesia, Apa Aturannya?"
              date="2 day ago in"
              description="
        Bagi para pengguna jalan, kita semua pasti sering melihat konvoi mobil atau motor di jalan. Iring-iringan kendaraan ini memang sering kita lihat tetapi apakah semua iring-iringan ini bisa dibilang sebagai konvoi?
        "
            />
            <BlogArticle
              imageSource="./Image/blog/Penilangan-Tanpa-Surat-Tugas-Polisi-Hakita-770x400.png"
              imageName="Penilangan-Tanpa-Surat-Tugas-Polisi-Hakita-770x400"
              title="Apakah Polisi Boleh Menilang Tanpa Surat Tugas?"
              date="2 day ago in"
              description="
        Bagi pengguna jalan sehari-hari, kita sudah tidak asing lagi dengan razia dan penilangan yang biasa dilakukan polisi. Di artikel kali ini, HAKITA akan membahas tentang prosedur penilangan dan apa hak Anda sebagai warga negara jika terjadi pemeriksaan di jalan.
        "
            />
            <BlogArticle
              title="Apakah Polisi Boleh Melakukan Pengeledahan Tanpa Surat Izin?"
              date="2 day ago in"
              description="
        Bagi pengguna jalan sehari-hari, kita sudah tidak asing lagi dengan razia dan penilangan yang biasa dilakukan polisi. Di artikel kali ini, HAKITA akan membahas tentang prosedur penilangan dan apa hak Anda sebagai warga negara jika terjadi pemeriksaan di jalan.
        "
            />
            <BlogArticle
              imageSource="./Image/blog/tukang-parkir-depan-indomaret-hakita-770x400.jpeg"
              imageName="tukang-parkir-depan-indomaret-hakita-770x400"
              title="Tukang Parkir Depan Indomaret: Legal atau Tidak?"
              date="2 day ago in"
              description="
        Tukang parkir di depan minimarket di Bekasi jadi perbincangan hangat setelah aksi unjuk rasa oleh gabungan organisasi masyarakat menuntut jatah pengelolaan parkir di berbagai minimarket di Bekasi.
        "
            />
            <BlogArticle
              imageSource="./Image/blog/Menyita-surat-KTP-SIM-kecelakaan-lalu-lintas-hakita-770x400.jpeg"
              imageName="Menyita-surat-KTP-SIM-kecelakaan-lalu-lintas-hakita-770x400"
              title="Menyita KTP Pelaku Tabrakan: Legal atau Tidak?"
              date="2 day ago in"
              description="
      Menyita KTP, SIM, atau STNK pelaku tabrakan sepertinya sudah menjadi sebuah tradisi yang dilakukan di Indonesia. Padahal sebenarnya hal ini tidak dibenarkan secara hukum.
      "
            />
            <BlogArticle
              imageSource="./Image/blog/double-swipe-transaksi-kartu-kredit-ritel-hakita-scaled-770x400.jpg"
              imageName="    double-swipe-transaksi-kartu-kredit-ritel-hakita-scaled-770x400
      "
              title="Double Swipe Dalam Transaksi Kartu Kredit"
              date="3 day ago in"
              description="
      Kalau kalian sering menggunakan kartu kredit untuk melakukan transaksi, kalian harus berhati-hati dengan pencurian data. Kok bisa? Kasus pencurian data atau duplikasi pemegang kartu kredit bisa banyak terjadi karena adanya double swipe atau dua kali gesek yang dilakukan dalam proses transaksi. Apa itu double swipe?
            "
            />
            <BlogArticle
              title="Apa Fungsi Materai Sebenarnya?"
              date="3 weeks ago in"
              description="
        Teman-teman pasti sudah tidak asing lagi dengan istilah materai. Dalam membuat perjanjian hitam diatas putih, pihak yang bersangkutan harus menandatangani dokumen di atas meterai. Banyak yang menganggap bahwa materai adalah syarat sah dari sebuah perjanjian antara kedua belah pihak. Benarkah begitu?
                    "
            />
            <BlogArticle
              title="Perbedaan Hukum Pidana dan Perdata"
              date="3 weeks ago in"
              description="
        Banyak dari kita yang sering mendengar istilah hukum pidana dan hukum perdata. Meski begitu, masih banyak juga masyarakat Indonesia yang belum benar-benar mengerti mengenai perbedaan hukum pidana dan dan hukum perdata. Karena itu, di artikel kali ini, HAKITA akan membahas apa saja perbedaan hukum pidana dan perdata.
                            "
            />
            <Pagination />
          </div>
          <div className="col-lg-3 offset-lg-1">
            <RecentInfo />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Blog;
