import React, { useEffect, useState } from "react";
import "../styles/WhereToPlayPage.css";
import Table from "../components/Table";
import spotsData from "../data/spots.json";

const WhereToPlayPage = () => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    setSpots(spotsData);
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Площадки",
        columns: [
          { Header: "Округ", accessor: "region" },
          { Header: "Район", accessor: "district" },
          { Header: "Адрес", accessor: "address" },
          { Header: "Отделение", accessor: "department" },
        ],
      },
    ],
    []
  );

  return (
    <div className="wtp--container">
      <div className="wtp--title__container">
        <h1 className="wtp--title">Игровые площадки</h1>
        <p className="wtp--title__text">
          Для достижения результатов в настольном теннисе необходимы постоянные
          тренировки. Для теннисиста очень важна выносливость, гибкость,
          скоростные и реактивные данные, отличная реакция и координация,
          поэтому, конечно же, теннисисту нужно где-то тренироваться. Ниже
          приведены спортивные школы, залы и отделения настольного тенниса, где
          это можно осуществить.
        </p>
      </div>
      <div className="wtp--table">
        <Table columns={columns} data={spots} />
      </div>
    </div>
  );
};

export default WhereToPlayPage;
