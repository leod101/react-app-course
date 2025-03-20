import React from "react";
import cls from "./Button.module.css";

const isPrimary = "primary";

function Button(props) {
  console.log(props);

  return (
    //<button className={isPrimary ? cls.primary : cls.btn}>text</button>;
    <button
      className={`${cls.btn} ${isPrimary ? cls.primary : ""}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
