import React from "react";
import irobotlogo from "../assets/i-robot-logo.png";

function Body() {
  return (
    <div className="p-10">
      {/* <img src={irobotlogo} alt="logo" sizes="" /> */}
      <img src={irobotlogo} alt="SVG Image" className="size-48"></img>
    </div>
  );
}

export default Body;
