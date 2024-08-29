import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer--container">
      <footer className="footer">
        <div className="footer--left__continer">
          <h1 className="footer--left__title">О НАС:</h1>
          <p className="footer--left__text">
            Мы общественная организация, ставящая целью развитие, пропаганду и
            популяризацию настольного тенниса в Москве и РФ.
          </p>
        </div>
        <div className="footer--right__container">
          <h1 className="footer--right__text">© 2024 МФНТ</h1>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
