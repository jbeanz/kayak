import { useState, useEffect } from "react";
import Destinations from "../../Data/sampleData";
import Swap from "./Swap";
import SelectDestination from "./SelectDestination";
import styled from "styled-components";

interface Props {
  submit: boolean;
}
const DestinationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  gap: 0.5rem;
`;

const DestinationSection = ({ submit }: Props) => {
  //handle user input -> send it down to SelectDestination to display
  const [departurePlanet, setDeparturePlanet] = useState<string>("");
  const [destinationPlanet, setDestinationPlanet] = useState<string>("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  //Toggle multi-select names and options
  const toggleDisplay = (id: string, name: string, manualAction?: string) => {
    setSelectedOptions((prevSelected: string[]) => {
      // if already selected, remove
      const selected: string[] = [...prevSelected];
      if (selected.includes(id)) {
        return selected.filter((item) => item !== id);
        // else, add
      } else {
        selected.push(id);
        return selected;
      }
    });
  };
  const handleSwap = () => {
    setDeparturePlanet(destinationPlanet);
    setDestinationPlanet(departurePlanet);
  };

  return (
    <DestinationContainer>
      <SelectDestination
        setUpdate={setDeparturePlanet}
        submit={submit}
        placeholder={"From?"}
        data={Destinations}
        toggleDisplay={toggleDisplay}
        value={departurePlanet}
      />
      <Swap handleSwap={handleSwap} />
      <SelectDestination
        setUpdate={setDestinationPlanet}
        submit={submit}
        placeholder={"To?"}
        data={Destinations}
        toggleDisplay={toggleDisplay}
        value={destinationPlanet}
      />
    </DestinationContainer>
  );
};
export default DestinationSection;
