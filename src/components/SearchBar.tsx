import React from "react";

import "./SearchBar.css";
import Magnifier from "../icons/Magnifier";

export const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="frame">
        <Magnifier />
        <div className="text-wrapper">Search in Aro</div>
      </div>
    </div>
  );
};
