import React from "react";

// npm
import { Link } from "react-router-dom";

function Pagination() {
  return (
    <div className="container">
      <div style={{ marginTop: "6.5rem" }}></div>
      <div className="row">
        <div className="col-lg-12">
          <nav aria-label="...">
            <ul class="pagination pagination-lg">
              <Link to="/blog">
                <li class="page-item">
                  <a class="page-link" href="/#" aria-label="Previous">
                    <span aria-hidden="true" className="	fa fa-angle-left">
                      ;
                    </span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
              </Link>
              <Link to="/blog">
                <li class="page-item ">
                  <a class="page-link" href="/#" tabindex="-1">
                    1
                  </a>
                </li>
              </Link>
              <li class="page-item active">
                <a class="page-link" href="/#">
                  2
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div style={{ marginTop: "7rem" }}></div>
    </div>
  );
}

export default Pagination;
