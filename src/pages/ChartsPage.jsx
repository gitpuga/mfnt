import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import "../styles/Table.css";
import "../styles/ChartsPage.css";
import athletesData from "../data/athletes.json";

const ChartsPage = () => {
  const [women, setWomen] = useState([]);
  const [men, setMen] = useState([]);

  useEffect(() => {
    setWomen(athletesData.women);
    setMen(athletesData.men);
  }, []);

  const getColumns = (title) => [
    {
      Header: title,
      columns: [
        { Header: "Место", accessor: "place" },
        { Header: "Имя", accessor: "name" },
        { Header: "Год рождения", accessor: "birthYear" },
        { Header: "Рейтинг", accessor: "rating" },
      ],
    },
  ];

  return (
    <div className="cp--container">
      <div className="cp--title__container">
        <h1 className="cp--title">Рейтинг</h1>
        <p className="cp--title__text">
          Российский рейтинг спортсменов г. Москвы на 01.09.2024 г.
        </p>
      </div>
      <div className="cp--tables">
        <Table columns={getColumns("Женщины")} data={women} />
        <Table columns={getColumns("Мужчины")} data={men} />
      </div>
    </div>
  );
};

export default ChartsPage;
