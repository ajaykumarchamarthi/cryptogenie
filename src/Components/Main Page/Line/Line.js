import React from "react";
import Arrow from "../../../assets/Arrow.svg";

function Line() {
  return (
    <div className="w-100 m-0 p-0 border  border-bottom border-dark border-1 position-relative">
      <img
        src={Arrow}
        className="position-absolute"
        style={{ top: "-6px", left: "62px" }}
        alt="arrow"
      />
      <img
        src={Arrow}
        className="position-absolute"
        style={{ top: "-6px", left: "430px" }}
        alt="arrow"
      />
    </div>
  );
}

export default Line;
