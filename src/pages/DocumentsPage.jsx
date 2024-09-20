import React from "react";
import DownloadDocument from "../components/DownloadDocument";
import "../styles/DocumentsPage.css";

const DocumentsPage = () => {
  const categories = [
    {
      title: "Устав МФНТ",
      documents: [
        { href: "media/documents/Устав.pdf", download_name: "Устав МФНТ" },
      ],
    },
    {
      title: "Протоколы ТС",
      documents: [
        {
          href: "media/documents/Критерии попадания в составы сборных команд Москвы по настольному теннису для участия во всероссийских соревнованиях.pdf",
          download_name:
            "Критерии попадания в составы сборных команд Москвы по настольному теннису для участия во всероссийских соревнованиях",
        },
        {
          href: "media/documents/Критерии попадания в составы сборных команд Москвы по настольному теннису для участия во всероссийских соревнованиях 2.pdf",
          download_name:
            "Критерии попадания в составы сборных команд Москвы по настольному теннису для участия во всероссийских соревнованиях 2",
        },
        {
          href: "media/documents/Протокол тренерского совета 09.09.2017.pdf",
          download_name: "Протокол тренерского совета МФНТ от 09.09.2017",
        },
        {
          href: "media/documents/Решение ТС 15.02.2018.pdf",
          download_name: "Протокол тренерского совета МФНТ от 15.02.2018",
        },
        {
          href: "media/documents/Решение ТС от 07.03.2018.pdf",
          download_name: "Протокол тренерского совета МФНТ от 07.03.2018",
        },
        {
          href: "media/documents/Протокол от 05.02.2019.pdf",
          download_name: "Протокол тренерского совета МФНТ от 05.02.2019",
        },
        {
          href: "media/documents/Протокол Тренерского совета МФНТ от 13.03.2019.pdf",
          download_name: "Протокол тренерского совета МФНТ от 13.03.2019",
        },
        {
          href: "media/documents/Протокол Тренерского совета МФНТ от 30.08.2019.pdf",
          download_name: "Протокол тренерского совета МФНТ от 30.08.2019",
        },
        {
          href: "media/documents/Протокол ТС МФНТ от 01.02.2020 г.pdf",
          download_name: "Протокол тренерского совета МФНТ от 01.02.2020",
        },
      ],
    },
    {
      title: "Протоколы президиума",
      documents: [
        {
          href: "media/documents/Протокол президиума 19.09.2017.pdf",
          download_name: "Протокол заседания Президиума МФНТ от 19.09.2017",
        },
        {
          href: "media/documents/Протокол от 15.02.2018.pdf",
          download_name: "Протокол заседания Президиума МФНТ от 15.02.2018",
        },
        {
          href: "media/documents/Протокол от 07.03.2018.pdf",
          download_name: "Протокол заседания Президиума МФНТ от 07.03.2018",
        },
        {
          href: "media/documents/Протокол от 06.04.2018.pdf",
          download_name: "Протокол заседания Президиума МФНТ от 06.04.2018",
        },
        {
          href: "media/documents/Протокол от 05.02.2019.pdf",
          download_name: "Протокол заседания Президиума МФНТ от 05.02.2019",
        },
        {
          href: "media/documents/Протокол от 17.04.2019.pdf",
          download_name: "Протокол заседания Президиума МФНТ от 17.04.2019",
        },
        {
          href: "media/documents/Протокол заседания Президиума МФНТ от 09.09.2019.pdf",
          download_name: "Протокол заседания Президиума МФНТ от 09.09.2019",
        },
        {
          href: "media/documents/протокол от 05.08.2021.pdf",
          download_name: "Протокол заседания Президиума МФНТ от 05.08.2021",
        },
      ],
    },
    {
      title: "Приказы",
      documents: [
        {
          href: "media/documents/Приказ о премировании по итогам Кубка России.pdf",
          download_name: "Приказ о премировании по итогам Кубка России-2017",
        },
      ],
    },
    {
      title: "Положения",
      documents: [
        {
          href: "media/documents/Положение Кубок президента Федерации настольного тенниса России.pdf",
          download_name:
            "Кубок президента Федерации настольного тенниса России",
        },
        {
          href: "media/documents/Положение Кубок МФНТ.pdf",
          download_name: "Кубок МФНТ 2019",
        },
        {
          href: "media/documents/Открытый турнир Возрождение.pdf",
          download_name: "Открытый турнир Возрождение",
        },
        {
          href: "media/documents/Регламент 1-й этап Чемпионата Москвы.pdf",
          download_name: "Регламент 1-й этап Чемпионата Москвы 2017",
        },
        {
          href: "media/documents/Регламент 1 этапа ЧМ 2018.pdf",
          download_name: "Регламент 1-й этап Чемпионата Москвы 2018",
        },
        {
          href: "media/documents/Регламент ЧМ-2019 1-й этап.pdf",
          download_name: "Регламент 1-й этап Чемпионата Москвы 2019",
        },
        {
          href: "media/documents/Положение 2019.pdf",
          download_name:
            "Положение о проведении официальных московских спортивных соревнований на 2019 год",
        },
      ],
    },
  ];

  return (
    <div className="dp--container">
      <div className="dp--title">Документы</div>
      {categories.map((category, index) => (
        <div key={index} className="dp--category__container">
          <h1 className="dp--category__title">{category.title}</h1>
          {category.documents.map((document, idx) => (
            <DownloadDocument
              key={idx}
              href={document.href}
              download_name={document.download_name}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default DocumentsPage;
