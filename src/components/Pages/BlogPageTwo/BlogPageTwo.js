import React, { Fragment } from "react";

// components
import HeaderBlog from "../Blog/HeaderBlog";
import BlogArticle from "../Blog/BlogArticle";
import RecentInfo from "./RecentInfo";
import Pagination from "./Pagination";

function Blog() {
  return (
    <Fragment>
      <HeaderBlog />
      <div style={{ marginTop: "7rem" }}></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <BlogArticle
              title="Tanda Tangan Elektronik: Definisi dan Cara Kerjanya"
              date="1 month ago in"
              description="
Dengan semakin berkembangnya teknologi, tanda tangan pun ikut mengalami perkembangan. Mungkin belakangan ini, Anda pernah mendengar tentang tanda tangan elektronik atau tanda tangan digital. Kali ini, HAKITA akan membahas cara kerja tanda tangan elektronik dan juga kekuatan hukumnya.
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
