import React from "react";

const SearchButton = () => {
  return (
    <form>
      <div className="input-group">
        <div className="input-group-prepend" style={{ height: "6rem" }}>
          <div className="input-group-text">
            <i className="fa fa-search utility__text_17px text-gray px-2" />
          </div>
        </div>
        <input
          className="utility__text_16px form-control"
          type="text"
          placeholder="Search..."
          style={{ height: "6rem", fontWeight: "bold" }}
        />
      </div>
    </form>
  );
};

export default SearchButton;
