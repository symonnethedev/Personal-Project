import { CardTravelSharp } from "@material-ui/icons";
import React from "react";
import { withRouter } from "react-router";
import "./Card.css";

function Card({ src, title, description, price }) {
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

//class Cards extends React.Component {
//goToCarddetails = (cardId) => {
//localStorage.setItem("selectedCard", cardId);
//this.props.history.push("/card-details");
// you can manage here to pass the clicked card id to the card details page if needed
//};

//render() {
//return (
// <div>
// <div onClick={() => this.goToCarddetails("cardId1")}> card 1 </div>
// <div onClick={() => this.goToCarddetails("cardId2")}> card 2 </div>
//<div onClick={() => this.goToCarddetails("cardId3")}> card 3 </div>
//<div onClick={() => this.goToCarddetails("cardId1")}> card 4 </div>
// <div onClick={() => this.goToCarddetails("cardId2")}> card 5 </div>
// <div onClick={() => this.goToCarddetails("cardId3")}> card 6 </div>
//</div>
// );
//}
//}

//export default withRouter(Cards);
export default Card;
