import React from "react";
import cls from "./MainLayout.module.css";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const currentYear = new Date().getFullYear();

function MainLayout() {
  return (
    <>
      <div className={cls.mainLayout}>
        <div className={cls.mainWrapper}>
          <Header />
          <main className={cls.main}>
            <Outlet />
          </main>
          <footer className={cls.footer}>
            React Question Cards Application | {currentYear} <br /> by Chiril
            Lisnic
          </footer>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
