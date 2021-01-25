import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import Villa from "./images/mv3.jpg";
//import villaList from "./villas.json";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header_icon" src={Villa} alt="" />
      </Link>

      <div className="header__center">
        <input type="text"></input>
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
