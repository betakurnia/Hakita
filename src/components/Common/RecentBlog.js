import React from "react";

// npm
import { Link } from "react-router-dom";

function RecentBlog(props) {
  return (
    <div style={{ marginTop: "2.8rem" }}>
      <div className="mt-4"></div>
      <div className="row no-gutters">
        <div className="col-lg-4">
          <img
            className="img-fluid"
            src={props.imageSource}
            alt={props.imageName}
            style={{ height: "8rem" }}
          />
        </div>
        <div className="col-lg-8 pl-3">
          <Link
            to={`/${props.title
              .toLowerCase()
              .split(" ")
              .join("-")}`}
            className="utility__custom-text-hover-dark-blue"
          >
            <p className="utility__text_14px  ">{props.title}</p>
          </Link>
          <p className="mt-3 utility__text_13px text-muted">{props.date}</p>
        </div>
      </div>
    </div>
  );
}

export default RecentBlog;
