import React from "react";
import DestinationCard from "./DestinationCard";
// import logo from "./logo.svg";
// import "./DestinationSlideshow.css";

function DestinationSlideshow() {
  //get data from backend
  //for each destination render <DestinationCard />

  return (
    <div className="DestinationSlideshow">
      <h1>Destinations you can travel to now</h1>
      <h2>Popular destinations open to most visitors from the United States</h2>
      <DestinationCard />
    </div>
  );
}

export default DestinationSlideshow;
