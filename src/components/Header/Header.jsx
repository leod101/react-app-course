import ReactLogo from "../../assets/react.svg";
import React from "react";
import Button from "../Button/Button";
import cls from "./Header.module.css";
function Header() {
  return (
    <div>
      <header className={cls.header}>
        <p>
          <img src={ReactLogo} alt="React logo" />
          <span>ReactCards</span>
        </p>
        <div>
          <Button isDisabled={true}>Add</Button>
          <Button isActiv >Login</Button>
        </div>
      </header>
    </div>
  );
}

export default Header;
