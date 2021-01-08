import React from "react";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import Login from "./Login";
import casaPastis from "./casaPastis";
//import Sacalma from "./Sacalma";
//import Calacontasunset from "./Calacontasunset";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <div className="app">
      <Router>
        <Header />
        <Switch>
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
