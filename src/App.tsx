import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/Search/SearchBar";
import NavBar from "./components/NavBar";
import DestinationSlideshow from "./components/DestinationSlideshow";

function App() {
  return (
    <div className="App">
      <img
        src="https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/100/000000/external-space-shuttle-space-icongeek26-outline-colour-icongeek26.png"
        alt="Kim Space Tour Logo"
      />
      <h1>KIM'S SPACE TOUR! </h1>
      <h2>REACH NEW HEIGHTS</h2>
      {/* <NavBar /> */}
      <SearchBar />

      {/* <DestinationSlideshow /> */}
    </div>
  );
}

export default App;
