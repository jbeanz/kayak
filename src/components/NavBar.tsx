import React from "react";
import { Link, Outlet } from "react-router-dom";
// import logo from "./logo.svg";
// import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <nav className="navbar-flexbox-container">
        <Link to="/">
          Dune Air
          <img
            className="rocket-img"
            src="https://img.icons8.com/ios/50/000000/rocket--v1.png"
            style={{
              width: "1em",
            }}
            alt="dune-air-logo"
          />
        </Link>
        <Link to="/my-trips">My Trips</Link>
        <Link to="/sign-in">Sign In</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;
