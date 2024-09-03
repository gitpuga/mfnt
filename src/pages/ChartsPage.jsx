import React from "react";
import Table from "../components/Table";
import "../styles/Table.css";
import "../styles/ChartsPage.css";

const ChartsPage = () => {
  const data = React.useMemo(
    () => [
      {
        col1: 2,
        col2: "Прохорова Юлия",
        col3: 1987,
        col4: 1806,
      },
      {
        col1: "6(5)",
        col2: "Воробьева Ольга",
        col3: 1990,
        col4: 1770,
      },
      {
        col1: "7(6)",
        col2: "Носкова Яна",
        col3: 1994,
        col4: 1768,
      },
      {
        col1: "13(12)",
        col2: "Маланина Мария",
        col3: 1998,
        col4: 1729,
      },
      {
        col1: "18(17)",
        col2: "Фетюхина Маргарита",
        col3: 1988,
        col4: 1722,
      },
      {
        col1: 19,
        col2: "Тихомирова Анна",
        col3: "1984",
        col4: 1713,
      },
      {
        col1: 31,
        col2: "Рязановa Анна",
        col3: "1986",
        col4: 1565,
      },
      {
        col1: "33(34)",
        col2: "Маланина Наталья",
        col3: "2002",
        col4: 1547,
      },
      {
        col1: 43,
        col2: "Гордеева Ольга",
        col3: "1990",
        col4: 1388,
      },
      {
        col1: "47(45)",
        col2: "Шишмарева Ольга",
        col3: "1987",
        col4: 1359,
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Список Женщин",
        columns: [
          {
            Header: "Место",
            accessor: "col1",
          },
          {
            Header: "Имя",
            accessor: "col2",
          },
          {
            Header: "Год рождения",
            accessor: "col3",
          },
          {
            Header: "Рейтинг",
            accessor: "col4",
          },
        ],
      },
    ],
    []
  );

  return (
    <div className="cp--container">
      <div className="cp--title__container">
        <h1 className="cp--title">Рейтинг</h1>
        <h2 className="cp--title__text">
          Российский рейтинг спортсменов г. Москвы на 01.12.2019 г.
        </h2>
      </div>
      <div className="cp--tables">
        <div className="cp--tables__women">
          <h1 className="cp--tables__title">женщины</h1>
          <Table columns={columns} data={data} />
          <Table columns={columns} data={data} />
          <Table columns={columns} data={data} />
          <Table columns={columns} data={data} />
        </div>
        <div className="cp--tables__men">
          <h1 className="cp--tables__title">мужчины</h1>
          <Table columns={columns} data={data} />
          <Table columns={columns} data={data} />
          <Table columns={columns} data={data} />
          <Table columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default ChartsPage;
