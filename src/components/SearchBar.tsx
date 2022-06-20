import React from "react";
// import logo from "./logo.svg";
// import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="SearchBar">
      {/* search destination city */}
      <form>
        <input type="text" placeholder="From?"></input>
        <button>{"<=>"}</button> {/* swap c1 and c2 */}
        <input type="text" placeholder="To?"></input>
        <input
          type="date"
          value="2018-07-22"
          min="2018-01-01"
          max="2018-12-31"
        ></input>
        <input
          type="date"
          value="2018-07-22"
          min="2018-01-01"
          max="2018-12-31"
        ></input>
        <button>Search</button>
      </form>
      {/* search departure city */}
    </div>
  );
}

export default SearchBar;
