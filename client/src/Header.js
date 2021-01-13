import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import Villa from "./images/mvillalogo.jpg";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header_icon" src={Villa} alt="" />
      </Link>

      <div className="header__center">
        <input type="text" />
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
