import "./App.css";
import "./destination.css";
import Search from "./components/Search/Search";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import MyTrips from "./components/Trips/MyTrips";
import SignIn from "./components/SignIn/SignIn";
import ResetPassword from "./components/SignIn/ResetPassword";
import CreateAccount from "./components/SignIn/CreateAccount";
import { useState, useEffect } from "react";

function App() {
  const [pageClass, setPageClass] = useState("home");
  return (
    <Router>
      <div className={"App " + pageClass} style={{ minHeight: "100vh" }}>
        <nav
          className="navbar-flexbox-container"
          style={{ marginBottom: "3rem" }}
        >
          <Link to="/" onClick={() => setPageClass("home")}>
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
          <Link to="/my-trips" onClick={() => setPageClass("my-trips")}>
            My Trips
          </Link>
          <Link to="/sign-in" onClick={() => setPageClass("sign-in")}>
            Sign In
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="my-trips" element={<MyTrips />} />
          <Route path="sign-in" element={<SignIn />}>
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="create-account" element={<CreateAccount />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
