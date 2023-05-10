import React from "react";
import "./Header.css";
function Header() {
  return (
    <header id="header">
      <div className="header">
        <div className="logo">
          <p>Blog</p>
          <p id="dot">.</p>
        </div>
        <div className="header-right">
          <p className="home-btn">Trang Chủ</p>
          <p className="about-btn">Giới thiệu</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
