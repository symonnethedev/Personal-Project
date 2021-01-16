import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import { CardMedia } from "@material-ui/core";

// ES7 snippets to do 'rfce'

function Home() {
  const image = "./images/4.jpg";
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src="https://images.unsplash.com/photo-1564501049559-0b54b6f0dc1b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2978&q=80"
          title="Casa Pastis"
          description="Lavish modern villa"
          url="/casaPastis"
        >
          description="Deluxe villa with spacious rooms."
        </Card>

        <Card
          src="https://images.unsplash.com/photo-1581974206939-b42731ea9dc9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"
          title="Sa Calma"
          description="Deluxe villa with spacious rooms."
          url="/saCalma"
        />
        <Card
          src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
          title="Vista Alegre"
          description="Elegant decor with amazing views."
          url="/vistaAlegre"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://images.unsplash.com/photo-1590398877831-1084ac6edb63?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1567&q=80"
          title="Villa Anna"
          description="Beautiful villa with a stunning views"
          price="£558/night"
          url="/villaAnna"
        />
        <Card
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2850&q=80"
          title="San Lorenzo"
          description="stylish contemporary villa"
          price="£350/night"
          url="/sanLorenzo"
        />
        <Card
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1567&q=80"
          title="Villa Atzi "
          description="Beautiful modern villa"
          price="£428/night"
          url="/VillaAzti"
        />
      </div>
    </div>
  );
}

export default Home;
