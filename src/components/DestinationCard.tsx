import React from "react";
// import logo from "./logo.svg";
// import "./DestinationCard.css";

function DestinationCard(props: any) {
  return (
    <div className="DestinationCard">
      {/* <img src={logo} alt="BigCo Inc. logo" /> */}
      <h1>{props.city}</h1>
      <h2>{props.vaccine}</h2>
      <h2>{props.mask}</h2>
    </div>
  );
}

export default DestinationCard;
