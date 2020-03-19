import React from "react";

function RecentComment() {
  return (
    <div>
      <div style={{ marginTop: "6rem" }}></div>
      <h5 className=" utility__text_17px ">Recent Comments</h5>
      <div style={{ marginTop: "6rem" }}></div>
      <h5 className=" utility__text_17px ">Categories</h5>
      <h5 className="mt-4 ">
        <a
          href="/#"
          className="text-gray utility__text-decoration_underline utility__text_17px "
        >
          {" "}
          UNCATEGORIZED (11)
        </a>
      </h5>
    </div>
  );
}

export default RecentComment;
