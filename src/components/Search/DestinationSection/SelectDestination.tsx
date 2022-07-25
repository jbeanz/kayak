import { useState, useEffect } from "react";
import { DestinationData } from "../../Data/sampleData";
import styled from "styled-components";
import DestinationInfo from "./DestinationInfo";

interface Props {
  setUpdate: React.Dispatch<React.SetStateAction<string>>;
  toggleDisplay: (id: string, name: string, manualAction?: string) => void;
  submit: boolean;
  data: DestinationData;
  placeholder: string;
  value: string;
}

const Input = styled.input`
  border-radius: 0.5rem;
  border: none;
  outline: 0;
  font-size: 1rem;
  width: 10rem;
  padding: 0.5rem 1rem;
  ::placeholder {
    font-size: 0.8rem;
  }
`;

const SelectDestination = ({
  setUpdate,
  toggleDisplay,
  submit,
  data,
  placeholder,
  value,
}: Props) => {
  const [userInput, setUserInput] = useState<string>("");
  const [displayInput, setDisplayInput] = useState<string>("");
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [searchValidation, setSearchValidation] = useState<string>("");
  const [matches, setMatches] = useState<string[]>([]);
  useEffect(() => {
    setDisplayInput(value);
  }, [value]);
  useEffect(() => {
    const handledestinationInputChange = () => {
      if (userInput.trim() === "") {
        setSearchValidation("");
        return;
      }
      if (!isNaN(+userInput) || !isNaN(parseFloat(userInput))) {
        setSearchValidation("Search cannot include a number");
        return;
      } else if (!matches.length) {
        setSearchValidation("No matching destination, please try another");
        return;
      } else {
        setSearchValidation("");
      }
    };
    handledestinationInputChange();
  }, [userInput, matches.length]);
  useEffect(() => {
    setDropdown(false);
  }, []);

  const handleClick = (planetId: string) => {
    //display user's selection
    const selectedPlanet = data[planetId].name;
    setUserInput(selectedPlanet);
    setUpdate(selectedPlanet);
    setDisplayInput(selectedPlanet);
    setDropdown(false);
  };

  const getMatchingDestination = (search: string): string[] => {
    const matches: string[] = [];
    for (const planet in data) {
      const name = data[planet].name;
      if (name.includes(search) && name.indexOf(search) === 0) {
        matches.push(planet);
      }
    }
    return matches;
  };
  const handleChange = (e: any) => {
    //display search as is to user
    let search = e.target.value;
    setUserInput(search);
    setDisplayInput(search);

    //lowercase for search
    search = search.toLowerCase();
    const matches = getMatchingDestination(search);
    matches.length ? setDropdown(true) : setDropdown(false);
    setMatches(matches);
  };

  return (
    <div className="empty-div">
      {/* <DestinationInfo data={data} /> */}
      <Input
        className="search-input"
        type="text"
        placeholder={placeholder}
        value={displayInput}
        onChange={handleChange}
        autoFocus
        required
        style={{ borderColor: searchValidation ? "red" : "black" }}
      ></Input>
      {dropdown ? (
        <ul className="dropdown">
          {matches.map((planet) => (
            <li key={planet} onClick={() => handleClick(planet)}>
              {data[planet].name}
            </li>
          ))}
        </ul>
      ) : null}
      <div>{searchValidation}</div>
    </div>
  );
};
export default SelectDestination;
