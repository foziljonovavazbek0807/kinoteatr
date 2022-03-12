import React from "react";
import "./Premiere.css";


function Premiere(props) {
  return (
    <div className="Premiere">
      <b className="pro_title">
        <span>{props.name}</span> <span>PREMIERE</span>
      </b>

      <div className="premiere_slider">
        <div className="slide_box"></div>
        <div className="slide_box"></div>
      </div>
    </div>
  );
}

export default Premiere;