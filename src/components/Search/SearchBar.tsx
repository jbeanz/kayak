import { useState } from "react";
import Calendar from "./Calendar";
import Airports from "./Airports";
// import logo from "./logo.svg";
// import "./SearchBar.css";
const SearchBar = () => {
  const [submit, setSubmit] = useState<boolean>(false);
  const [returnDate, setReturnDate] = useState<string>("");
  const [departureDate, setDepartureDate] = useState<string>("");
  const [departureAirport, setDepartureAirport] = useState<string>("");
  const [destinationAirport, setDestinationAirport] = useState<string>("");

  const handleSubmit = (e: any) => {
    console.log("returnDate: ", returnDate);
    console.log("departureDate: ", departureDate);
    if (!returnDate) alert("returnDate must be chosen");
    if (!departureDate) alert("departureDate must be chosen");
    if (!departureAirport) alert("departureAirport must be chosen");
    if (!destinationAirport) alert("destinationAirport must be chosen");
    setSubmit(true);
  };

  return (
    <div className="flexbox-container">
      <Airports
        setDepartureAirport={setDepartureAirport}
        setDestinationAirport={setDestinationAirport}
        submit={submit}
      />
      <Calendar
        setReturnDate={setReturnDate}
        setDepartureDate={setDepartureDate}
        submit={submit}
      />
      <div className="submit">
        <button onClick={handleSubmit}> BLASTOFF! </button>
      </div>
    </div>
  );
};

export default SearchBar;
