import React from "react";
import "./buttonToDo.css";

function ButtonToDo({ onClick, className, children }) {
  return (
    <button className={`rounded-3 p-3 ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonToDo;