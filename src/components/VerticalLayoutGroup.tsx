import React from "react";
import { SearchBar } from "./SearchBar";
import "./VerticalLayoutGroup.css";

const VerticalLayoutGroup = () => {
  return (
    <div className="search-bar-screen">
      <SearchBar />
      <div className="user">
        <div className="group">
          <div className="overlap-group">
            <div className="div">C</div>
          </div>
        </div>
        <div className="frame-2">
          <div className="text-wrapper-2">Cole Gawin</div>
          <div className="text-wrapper-3">colegawin@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default VerticalLayoutGroup;
