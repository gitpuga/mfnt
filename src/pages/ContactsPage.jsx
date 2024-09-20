import React from "react";
import "../styles/ContactsPage.css";

const ContactsPage = () => (
  <div className="cnp--container">
    <h1 className="cnp--title">Контакты</h1>
    <p className="cnp--title__text">Куда и к кому обращаться</p>
    <div className="cnp--contacts__container">
      <p className="cnp--email">email: mfntmail@gmail.com</p>
      <div className="cnp--card__container">
        {["facebook", "vkontakte", "telegram", "youtube", "instagram"].map(
          (socialMedia, index) => (
            <div key={index} className={`cnp--card__${socialMedia}`}>
              <p className="cnp--card__text">{socialMedia}</p>
            </div>
          )
        )}
      </div>
    </div>
  </div>
);

export default ContactsPage;
