import "./App.css";
import SearchBar from "./components/Search/SearchBar";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import MyTrips from "./components/MyTrips";
import SignIn from "./components/SignIn/SignIn";
import ResetPassword from "./components/SignIn/ResetPassword";
function App() {
  return (
    <Router>
      <div className="App">
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
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="my-trips" element={<MyTrips />} />
          <Route path="sign-in" element={<SignIn />}>
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
