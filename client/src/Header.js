import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import Villa from "./images/mv3.jpg";
import villaList from "./villas.json";
import { useState } from "react";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="header">
      <Link to="/">
        <img className="header_icon" src={Villa} alt="" />
      </Link>

      <div className="header__center">
        <input
          type="text"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        {villaList
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <div className="user" key={key}>
                <p>{val.name} </p>
              </div>
            );
          })}
        <SearchIcon />
      </div>

      <div className="header__right">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Avatar />
          <h3> My Account </h3>
        </Link>
      </div>
    </div>
  );
}

export default Header;
