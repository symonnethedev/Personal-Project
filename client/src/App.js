import React from "react";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import Login from "./Login";
import CasaPastis from "./CasaPastis";
import VistaAlegre from "./VistaAlegre";
import Like from "./Like";
import BelleVilla from "./BelleVilla";
import VillaYama from "./VillaYama";
import VillaMieke from "./VillaMieke";
import CanaMilene from "./CanaMilene";
import SanLorenzo from "./SanLorenzo";
import VillaAlessandra from "./VillaAlessandra";
import VillaAtzi from "./VillaAtzi";
import SaCalma from "./SaCalma";
import VillaEmilito from "./VillaEmilito";
import SerenaVista from "./SerenaVista";
import VillaAnna from "./VillaAnna";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App () {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

const [user, setUser] = useState({name: "", email: ""});
const [error, setError] = useState("");

cosnt Login = details => {
  console.log(details);

  if (details.email == adminUser.email && details.password == adminUser.password)
  console.log("Logged in");
  setUser({
    name: details.name,
    email: details.email
  });
} else {
  console.log("Details do not match!");
  setError("Details do not match!");
}
}

const Logout = () => {
  console.log("Logout");
  setUser({email:""});
}

  return (
    <div className="App">
     {(user.email !="") ? (
       <div className="welcome">
         <h2>Welcome, <span>{user.name}</span></h2>
         <button onClick={Logout}>Logout</button>
    </div>
  ):(
    <Copyright SignIn={SignIn} error={error}/>
  )}
</div>
  );
}

function App() {
  return (
    // BEM
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/VillaMieke" render={() => <VillaMieke />} />
          <Route path="/VillaAlessandra" render={() => <VillaAlessandra />} />
          <Route path="/CanaMilene" render={() => <CanaMilene />} />
          <Route path="/VillaEmilito" render={() => <VillaEmilito />} />
          <Route path="/SerenaVista" render={() => <SerenaVista />} />
          <Route path="/BelleVilla" render={() => <BelleVilla />} />
          <Route path="/VillaYama" render={() => <VillaYama />} />
          <Route path="/SanLorenzo" render={() => <SanLorenzo />} />
          <Route path="/VillaAtzi" render={() => <VillaAtzi />} />
          <Route path="/VistaAlegre" render={() => <VistaAlegre />} />
          <Route path="/SaCalma" render={() => <SaCalma />} />
          <Route path="/VillaAnna" render={() => <VillaAnna />} />
          <Route exact path="/CasaPastis" render={() => <CasaPastis />} />
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
