import React from "react";
import "./Header.css";
import { Link, Route, Routes } from "react-router-dom";
function Header() {
  return (
    <header id="header">
      <div className="header">
        <div className="logo">
          <Link to="/">
            <p>PTKL</p>
          </Link>
          <p id="dot">.</p>
        </div>
        <div className="header-right">
          <Link to="/">
            <p className="home-btn">Trang Chủ</p>
          </Link>
          <Link to="/about">
            <p className="about-btn">Giới thiệu</p>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
