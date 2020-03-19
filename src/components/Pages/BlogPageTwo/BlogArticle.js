import React from "react";

// npm
import { Link } from "react-router-dom";
import classNames from "classnames";

function BlogArticle(props) {
  return (
    <article>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <Link
              to={`/${props.title
                .toLowerCase()
                .split(" ")
                .join("-")}`}
              className="utility__custom-text-decoration_underline_black"
            >
              <img
                src={props.imageSource}
                alt={props.imageName}
                className={classNames({
                  " mt-5": props.imageSource && props.imageName
                })}
              />
              <h5
                className="mt-4 utility__text_30px "
                style={{ fontWeight: "bold" }}
              >
                {props.title}
              </h5>
            </Link>
            <p className="mt-4 utility__text_15px text-muted">{props.date}</p>
            <Link
              to={`/${props.title}`}
              className="utility__custom-text-decoration_underline_black"
            >
              <p className="mt-3 utility__text_17px ">{props.description}</p>
              <p
                className="mt-5 utility__text_11px "
                style={{ fontWeight: "bold", letterSpacing: "0.25rem" }}
              >
                CONTINUE READING
              </p>
            </Link>
            <p></p>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </article>
  );
}

export default BlogArticle;
