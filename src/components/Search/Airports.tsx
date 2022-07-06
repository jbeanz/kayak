import { useState, useEffect } from "react";
interface Props {
  setDestinationAirport: React.Dispatch<React.SetStateAction<string>>;
  setDepartureAirport: React.Dispatch<React.SetStateAction<string>>;
  submit: boolean;
}
const Airports = ({
  setDestinationAirport,
  setDepartureAirport,
  submit,
}: Props) => {
  const [airportCodes, setAirportCodes] = useState<Array<any>>([]);
  const [swap, setSwap] = useState<boolean>(false);
  const [departureInput, setDepartureInput] = useState<string>("");
  console.log("departureInput: ", departureInput);
  const [destinationInput, setDestinationInput] = useState<string>("");
  console.log("destinationInput: ", destinationInput);
  const [searchValidation, setSearchValidation] = useState<string>("");

  useEffect(() => {
    const handledestinationInputChange = () => {
      if (destinationInput.trim() === "") {
        setSearchValidation("");
        return;
      }

      if (isNaN(+destinationInput) || isNaN(parseFloat(destinationInput))) {
        setSearchValidation("Search must be a number");
        return;
      } else {
        setSearchValidation("");
      }
    };

    handledestinationInputChange();
  }, [destinationInput]);
  // fetch airline codes
  useEffect(() => {
    const fetchAirlineCodes = async () => {
      const res = await fetch(
        "https://api.lufthansa.com/v1/mds-references/airports/FRA",
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer kswasbz9x94q2275vsyndbp9",
          },
        }
      );
      const lufthansaData = await res.json();
      console.log("lufthansaData: ", lufthansaData);

      // const options = {
      //   method: "GET",
      //   headers: {
      //     "X-RapidAPI-Key":
      //       "6703bea525mshe907c349014286dp1db7c0jsn9b14248f7ee2",
      //     "X-RapidAPI-Host": "airport-info.p.rapidapi.com",
      //   },
      // };
      // fetch("https://airport-info.p.rapidapi.com/airport", options)
      //   .then((response) => response.json())
      //   .then((response) => console.log(response))
      //   .catch((err) => console.error(err));
    };
    fetchAirlineCodes();
  }, []);

  const handleSwap = () => {
    setDestinationInput(departureInput);
    setDepartureInput(destinationInput);
  };
  const handleDeparture = (e: any) => {
    const search = e.target.value.toUpperCase();
    getMatchingAiport(search);
    setDepartureInput(search);
  };
  const handleDestination = (e: any) => {
    const search = e.target.value.toUpperCase();
    getMatchingAiport(search);
    setDestinationInput(search);
  };
  const getMatchingAiport = (search: string) => {
    //take cleaned search input
    //find in database by city name
    //set search as destination or departure airport
  };

  return (
    <div className="airports">
      <input
        type="text"
        placeholder="From?"
        value={departureInput}
        onChange={handleDeparture}
        autoFocus
      ></input>

      <button onClick={handleSwap}>
        <img
          className="resize"
          src="https://img.icons8.com/cotton/64/000000/swap--v1.png"
          alt="swap button"
        />
      </button>
      <input
        type="text"
        placeholder="To?"
        value={destinationInput}
        onChange={handleDestination}
      ></input>
    </div>
  );
};
export default Airports;
