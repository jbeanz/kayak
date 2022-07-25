import { useState } from "react";
import Calendar from "./Calendar";
import SelectPassengers from "./SelectPassengers";
import DestinationSection from "./DestinationSection/DestinationSection";
import { FlexboxContainer } from "../../StyledComponents";
import DestinationSlideshow from "../DestinationSlideshow";
import { relative } from "path";
import styled from "styled-components";
import "../../App.css";
import Filter from "./Filter";
import Label from "./Label";
import { Gradient } from "../../StyledComponents";

import { Row, Column } from "../../StyledComponents";

interface Props {
  backgroundColor?: string;
}
const Title = styled.h1`
  color: white;
`;
const Filters = styled(Column)<Props>`
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

const FiltersContainer = styled(Filters)`
  flex-direction: row;
  justify-content: space-evenly;
  width: 50%;
  padding: 0;
  background-color: white;
`;

const Button = styled.button`
  height: 2.5rem;
  width: 8rem;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;

  :before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  :active {
    color: #000;
  }

  :active:after {
    background: transparent;
  }

  :hover:before {
    opacity: 1;
  }

  :after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #f684ba;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;

const SearchBar = () => {
  const [submit, setSubmit] = useState<boolean>(false);
  const [returnDate, setReturnDate] = useState<string>("");
  const [departureDate, setDepartureDate] = useState<string>("");
  const [departurePlanet, setDeparturePlanet] = useState<string>("");
  const [destinationPlanet, setDestinationPlanet] = useState<string>("");
  const [selected, setSelectedOptions] = useState<number[]>([]);
  const [tabOpen, setTabOpen] = useState<boolean>(true);
  const [filtersSelected, setFiltersSelected] = useState(new Map());

  const handleSubmit = (e: any) => {
    console.log("returnDate: ", returnDate);
    console.log("departureDate: ", departureDate);
    if (!returnDate) alert("returnDate must be chosen");
    if (!departureDate) alert("departureDate must be chosen");
    if (!departurePlanet) alert("departurePlanet must be chosen");
    if (!destinationPlanet) alert("destinationPlanet must be chosen");
    setSubmit(true);
  };
  const labels = {
    travelers: [
      "Adults 18-64",
      "Studentsover 18",
      "Seniors 65+",
      "Youths 12-17",
      "Children 2-11",
      "Toddlers in own seat under 2",
      "Infants on lap under 2",
    ],
    bags: ["Carry-on bag", "Checked bag"],
    trip: ["One-way", "Round-trip", "Multi-city", "Trip Builder"],
    flight: ["Economy", "Premium Economy", "Business", "First", "Multiple"],
  };
  const handleUpdateMap = (type: string) => {
    filtersSelected.clear();
    setFiltersSelected(new Map(filtersSelected.set(type, true)));
  };

  return (
    <Gradient>
      <div className="glass">
        <Column>
          <Row>
            <Title>Where are you flying?</Title>
          </Row>

          <FiltersContainer
            className="labels-container"
            backgroundColor={"red"}
          >
            {labels
              ? Object.entries(labels).map((type) => {
                  return (
                    <div>
                      {filtersSelected.get(type[0]) ? (
                        <Filters>
                          {type[1].map((label) => (
                            <Filter key={label} label={label} />
                          ))}
                        </Filters>
                      ) : (
                        <Filters onClick={() => handleUpdateMap(type[0])}>
                          <Label label={type[0]} />
                        </Filters>
                      )}
                    </div>
                  );
                })
              : null}
          </FiltersContainer>
          <Row>
            <Column>
              <DestinationSection submit={submit} />
            </Column>
            <Column>
              <Calendar
                setReturnDate={setReturnDate}
                setDepartureDate={setDepartureDate}
                submit={submit}
              />
            </Column>
            <Column>
              <Button className="button-85" onClick={handleSubmit}>
                BLASTOFF!
              </Button>
            </Column>
          </Row>
        </Column>
        <Column>
          <Row>
            <Title>Explore planets nearby</Title>
          </Row>
          <Row>
            <DestinationSlideshow></DestinationSlideshow>
          </Row>
        </Column>
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </Gradient>
  );
};

export default SearchBar;
