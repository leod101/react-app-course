import ReactLogo from "../../assets/react.svg";
import React from "react";
import Button from "../Button/Button";
import cls from "./Header.module.css";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <header className={cls.header}>
        <p onClick={() => navigate("/")}>
          <img src={ReactLogo} alt="React logo" />
          <span>ReactCards</span>
        </p>
        <div>
          <Button onClick={() => navigate("/addquestion")}> Add</Button>
          <Button>Login</Button>
        </div>
      </header>
    </div>
  );
}

export default Header;
