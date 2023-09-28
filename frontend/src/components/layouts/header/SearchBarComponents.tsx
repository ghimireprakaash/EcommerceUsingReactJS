import React from "react";

export default function SearchBarComponents() {
  return (
    <React.Fragment>
      <div className="search-wrapper">
        <i className="fa fa-search" />
        <input placeholder="Search..." className="input-field" />
      </div>
    </React.Fragment>
  );
}
