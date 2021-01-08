import React from "react";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import Login from "./Login";
import casaPastis from "./casaPastis";
import vistaAlegre from "./vistaAlegre";
import calacontaSunset from "./calacontaSunset";
import sanLorenzo from "./sanLorenzo";
import villaMieke from "./villaMieke";
import villaAlessandra from "./villaAlessandra";
import canaMilene from "./canaMilene";
import villaEmilto from "./villaEmilto";
import serenaVista from "./serenaVista ";
import belleVilla from "./belleVilla";
import villaYama from "./villaYama";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/villaYama">
            <villaYama Page />
          </Route>
          <Route path="/belleVilla">
            <belleVilla Page />
          </Route>
          <Route path="/serenaVista ">
            <serenaVista Page />
          </Route>
          <Route path="/villaEmilto ">
            <villaEmilto Page />
          </Route>
          <Route path="/canaMilene ">
            <canaMilene Page />
          </Route>
          <Route path="/villaAlessandra ">
            <villaAlessandra Page />
          </Route>
          <Route path="/villaMieke ">
            <villaMieke Page />
          </Route>
          <Route path="/sanLorenzo">
            <sanLorenzo Page />
          </Route>
          <Route path="/calacontaSunset">
            <calacontaSunset Page />
          </Route>
          <Route path="/vistaAlegre">
            <vistaAlegre Page />
          </Route>
          <Route path="/saCalma">
            <saCalma Page />
          </Route>
          <Route path="/casaPastis">
            <casaPastis Page />
          </Route>
          <Route path="/login">
            <Login Page />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
