import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import DestinationSlideshow from "./components/DestinationSlideshow";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <div className="App">
      {/* <NavBar /> */}
      <SearchBar />
      <DestinationSlideshow />
    </div>
  );
}

export default App;
