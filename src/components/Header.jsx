import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <Link className="header-link" to="/">
          <img src="/media/мфнт-лого.png" alt="логотип мфнт" className="header-icon" />
        </Link>

        <div className="header-divider" />

        <Link className="header-link" to="/charts">
          <h1 className="header-text">рейтинг</h1>
        </Link>

        <Link className="header-link" to="/calendar">
          <h1 className="header-text">календарь</h1>
        </Link>

        <Link className="header-link" to="/where-to-play">
          <h1 className="header-text">площадки</h1>
        </Link>
        
        <Link className="header-link" to="/about-us">
          <h1 className="header-text">о нас</h1>
        </Link>

        <Link className="header-link" to="/documents">
          <h1 className="header-text">документы</h1>
        </Link>

        <Link className="header-link" to="/media">
          <h1 className="header-text">медиа</h1>
        </Link>

        <Link className="header-link" to="/contacts">
          <h1 className="header-text">контакты</h1>
        </Link>
      </header>
    </div>
  );
};

export default Header;
