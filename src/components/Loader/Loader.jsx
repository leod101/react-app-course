import React from "react";
import cls from "./Loader.module.css";

function Loader() {
  return (
    <div className={cls.backdrop}>
      <span class={cls.loader}></span>
    </div>
  );
}

export default Loader;
