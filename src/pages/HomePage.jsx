import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const buttonsData = [
    {
      title: "ГДЕ ЧИТАТЬ НОВОСТИ?",
      text: "Подписывайтесь на нас на всех социальных площадках",
      route: "/contacts",
      className: "hp--button__news"
    },
    {
      title: "ГДЕ ИГРАТЬ?",
      text: "Список площадок, на которых можно играть и учиться настольному теннису",
      route: "/where-to-play",
      className: "hp--button__where"
    },
    {
      title: "КТО БУДЕТ УЧИТЬ?",
      text: "Мастера малой ракетки, которые научат Вас побеждать",
      route: "/teachers",
      className: "hp--button__teachers"
    },
    {
      title: "ГДЕ ПОСМОТРЕТЬ РЕЙТИНГИ?",
      text: "Списки лучших московских теннисистов",
      route: "/charts",
      className: "hp--button__charts"
    }
  ];

  return (
    <div className="hp--container">
      <div className="hp--title__container">
        <h1 className="hp--title">мфнт</h1>
        <h2 className="hp--title__text">
          московская федерация настольного тенниса
        </h2>
      </div>
      <div className="hp--button__container">
        {buttonsData.map((button, index) => (
          <div key={index} onClick={() => navigate(button.route)} className={button.className}>
            <h1 className="hp--button__title">{button.title}</h1>
            <p className="hp--button__text">{button.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
