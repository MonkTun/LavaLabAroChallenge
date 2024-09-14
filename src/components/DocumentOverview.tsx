import React from "react";
import File from "./File";
import "./DocumentOverview.css";
import ViewToggle from "./ViewToggle";

function DocumentOverview() {
  return (
    <div className="files-grid-view">
      <div className="header">
        <h1 className="header-text">All Projects</h1>
        <h1 className="header-text">
          <ViewToggle />
        </h1>
      </div>
      <div className="grid">
        <File />
        <File />
        <File />
        <File />
        <File />
        <File />
      </div>
    </div>
  );
}

export default DocumentOverview;
/*<h1 className="text-2xl font-bold mb-6 text-black">All Projects</h1>
        <div className="ml-auto">
          <ViewToggle />
        </div> */
