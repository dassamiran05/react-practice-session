import React from "react";
import "./style.css"

const Square = ({value, onClick, color}) => {
  return (
    <div className="sqaure" onClick={onClick}>
      <h3 style={{color: color}}>{value}</h3>
    </div>
  );
};

export default Square;
