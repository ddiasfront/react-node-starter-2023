import React from "react";
import { useGetUsers } from "../../services/userGetUsers";

export const Home = () => {
  const { data } = useGetUsers();

  console.log(data);
  return (
    <header>
      <h1 className="title">Header</h1>
      <div className="card">
        {/* <span className="card__img"></span>
        <div className="card__content">
          <ul className="card__list">
            <li className="card__item card__item--active">Adobe XD</li>
            <li className="card__item">Figma</li>
            <li className="card__item">Sketch</li>
          </ul>
          <p className="card__desc">
            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          </p>
          <a className="card__link" href="#test">
            Visit the link
          </a>
        </div> */}
      </div>
    </header>
  );
};
