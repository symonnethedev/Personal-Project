import { CardTravelSharp } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ src, title, description, price }) {
  return (
    <div className="card">
      {" "}
      <Link to="/sanLorenzo">
        <Link to="/calacontaSunset">
          <Link to="/vistaAlegre">
            <Link to="/saCalma">
              <Link to="/casaPastis">
                <img src={src} alt="" />
                <div className="card__info">
                  <h2>{title}</h2>
                  <h4>{description}</h4>
                  <h3>{price}</h3>
                </div>
              </Link>
            </Link>
          </Link>
        </Link>
      </Link>
    </div>
  );
}

export default Card;
