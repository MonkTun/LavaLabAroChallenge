import React from "react";
import ViewGridIcon from "../icons/ViewGridIcon";
import ViewListIcon from "../icons/ViewListIcon";

const ViewToggle = () => {
  return (
    <div className="flex space-x-4">
      <ViewGridIcon />

      <ViewListIcon />
    </div>
  );
};

export default ViewToggle;
