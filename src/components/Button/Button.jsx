import React from "react";
import cls from "./Button.module.css";

function Button({ onClick, isActiv, isDisabled, children }) {
  return (
    <button
      className={`${cls.btn} ${isActiv ? cls.active : ""}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

export default Button;
