import React from "react";
import "../styles/CalendarPage.css";

const CalendarPage = () => {
  return (
    <div className="cap--container">
      <h1 className="cap--list__title">Календарь</h1>
      <p className="cap--list__title-text">
        Международных соревнований в сезоне 2024
      </p>
      <ul className="cap--list">
        {[
          "3 – 5 января. WTT Finals Men. Доха, Катар",
          "8 – 13 января. WTT Star Contender. Доха, Катар",
          "14 – 20 января. WTT Contender. Доха, Катар",
          "15 – 18 января. WTT Feeder. Корпус Кристи, США",
          "20 – 21 января. Europe Top 16. Монтре, Швейцария",
          "23 – 28 января. WTT Star Contender. Гоа, Индия",
          "24 – 28 января. Чемпионат Европы U21. Скопье, Македония",
          "1 – 4 февраля. WTT Feeder. Манчестер, Великобритания",
          "16 – 25 февраля. Командный чемпионат мира (ITTF World Team Table Tennis Championships Finals 2024). Пусан, Республика Корея",
          "3 – 10 марта. Африканские игры. Аккра, Гана",
          "7 – 11 марта. Singapore Smash. Сингапур, Сингапур",
          "17 – 20 марта. WTT Feeder. Бейрут, Ливан",
          "21 – 24 марта. WTT Feeder. Бейрут, Ливан",
          "26 марта – 1 апреля. WTT Feeder. Оточец, Словения",
          "27 – 31 марта. WTT Champions. Инчон, Республика Корея",
          "2 – 7 апреля. WTT Feeder. Варадзин, Хорватия",
          "8 – 12 апреля. WTT Feeder. Дюссельдорф, Германия",
          "8 – 14 апреля. WTT Contender. Тайюань, Китай",
          "11 – 12 апреля. Мировая олимпийская квалификация в миксте. Гавиржов, Чехия",
          "14 – 17 апреля. WTT Feeder. Гавиржов, Чехия",
          "15 – 21 апреля. Кубок мира. Одиночный разряд (ITTF Singles World Cup). Макао, Китай",
          "23 апреля. Мировой день настольного тенниса. По всему миру",
          "6 – 8 мая. Кубок Африки. Кигали, Руанда",
          "6 – 12 мая. Континентальная олимпийская квалификация. Место проведения определится позже",
          "11 – 12 мая. Кубок Океании. Нумеа, Новая Каледония",
          "11 – 12 мая. Олимпийская квалификация в Океании. Нумеа, Новая Каледония.",
          "10 – 12 мая. Африканская олимпийская квалификация. Кигали, Руанда",
          "13 – 19 мая. Континентальная олимпийская квалификация. Место проведения определится позже",
          "20 – 26 мая. WTT Contender. Рио-де-Жанейро, Бразилия",
          "22 – 26 мая. Чемпионат Европы U13. Бухарест, Румыния",
          "23 – 25 мая. Паралимпийская мировая квалификация. Паттайя, Таиланд",
          "27 мая – 2 июня. WTT Contender. Лагос, Нигерия",
          "3 – 9 июня. WTT Contender. Загреб, Хорватия",
          "10 – 16 июня. WTT Star Contender. Любляна, Словения",
          "10 – 16 июня. Чемпионат Южной Америки. Лима, Перу",
          "24 – 30 апреля. WTT Star Contender. Тунис, Тунис",
          "29 июня – 1 июля. Южнофриканский региональный чемпионат. Луанда, Ангола",
          "2 – 7 июля. WTT Star Contender. Бангкок, Таиланд",
          "6 – 14 июля. Чемпионат мира среди ветеранов. Рим, Италия",
          "12 – 21 июля. Юношеский чемпионат Европы. Мальме, Швеция",
          "15 – 21 июля. Юношеский чемпионат Африке. Габороне, Ботсвана",
          "27 июля – 10 августа. Олимпийские игры. Париж, Франция",
          "19 – 25 августа. WTT Contender. Лима, Перу",
          "20 – 25 августа. WTT Feeder. Оломоуц, Чехия",
          "29 августа – 7 сентября. Паралимпийские игры. Париж, Франция",
          "3 – 8 сентября. WTT Contender. Алма-Ата, Казахстан",
          "10 – 13 сентября. WTT Feeder. Панагюриште, Болгария",
          "16 – 21 сентября. WTT Feeder. Стокгольм, Швеция",
          "16 – 22 сентября. WTT Star Contender. Ланьчжоу, Китай",
          "2 – 6 октября. WTT Feeder. Доха, Катар",
          "6 – 13 октября. Чемпионат Азии. Алма-Ата, Казахстан",
          "12 – 19 октября. Чемпионат Африки. Аддис-Аббеба , Эфиопия",
          "12 – 20 октября. Панамериканский чемпионат. Сан-Сальвадор, Сальвадор",
          "15 – 20 октября. Чемпионат Европы. Линц, Австрия",
          "23 – 27 октября. WTT Feeder. Кальяри, Италия",
          "18 – 22 ноября. WTT Feeder. Дюсссельдорф, Германия",
          "27 ноября – 1 декабря. WTT Feeder. Вила-Нова-ди-Гая, Португалия",
          "1 – 8 декабря. Чемпионат мира среди юниоров. Хельсинборг, Швеция",
        ].map((item, index) => (
          <li key={index} className="cap--list__line">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarPage;
