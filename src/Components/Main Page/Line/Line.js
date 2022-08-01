import React from "react";
import Arrow from "../../../assets/Arrow.svg";

function Line() {
  return (
    <div className="w-100 my-5 p-0 border  border-bottom border-dark border-1 position-relative">
      <img
        src={Arrow}
        className="position-absolute"
        style={{ top: "-6px", left: "20vw" }}
        alt="arrow"
      />
      <img
        src={Arrow}
        className="position-absolute"
        style={{ top: "-6px", left: "50vw" }}
        alt="arrow"
      />
    </div>
  );
}

export default Line;
