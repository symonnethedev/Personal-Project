import React from "react";

class CardDetails extends React.Component {
  render() {
    let selectedCardId = localStorage.getItem("selectedCard");
    // you can get this cardId anywhere in the component as per your requirement
    return <div>card details here</div>;
  }
}

export default CardDetails;
