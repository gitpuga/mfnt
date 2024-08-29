import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="hp--container">
      <div className="hp--title__container">
        <h1 className="hp--title">МФНТ</h1>
        <h2 className="hp--title__text">
          Московская федерация настольного тенниса
        </h2>
      </div>
      <div className="hp--button__container">
        <div onClick={() => navigate("/contacts")} className="hp--button__news">
          <h1 className="hp--button__title">ГДЕ ЧИТАТЬ НОВОСТИ?</h1>
          <p className="hp--button__text">
            Подписывайтесь на нас на всех социальных площадках
          </p>
        </div>
        <div
          onClick={() => navigate("/where-to-play")}
          className="hp--button__where"
        >
          <h1 className="hp--button__title">ГДЕ ИГРАТЬ?</h1>
          <p className="hp--button__text">
            Список площадок, на которых можно играть и учиться настольному
            теннису
          </p>
        </div>
        <div
          onClick={() => navigate("/teachers")}
          className="hp--button__teachers"
        >
          <h1 className="hp--button__title">КТО БУДЕТ УЧИТЬ?</h1>
          <p className="hp--button__text">
            Мастера малой ракетки, которые научат Вас побеждать
          </p>
        </div>
        <div onClick={() => navigate("/charts")} className="hp--button__charts">
          <h1 className="hp--button__title">ГДЕ ПОСМОТРЕТЬ РЕЙТИНГИ?</h1>
          <p className="hp--button__text">
            Списки лучших московских теннисистов
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
