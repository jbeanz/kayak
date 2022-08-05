import { useRef, useEffect, useState } from "react";
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
import { Column } from "../../StyledComponents";
import PlanetGrid from "./Planets/PlanetGrid";
// import FilterSingleSelect from "./FilterSingleSelect";
// import labels from "../Data/labels.json";

interface Props {
  backgroundColor?: string;
}
const Title = styled.h1`
  color: #514f5d;
  margin: 2rem 0; ;
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

interface PropsLabel {
  label?: string;
}
const Row = styled.div<PropsLabel>`
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 0.5rem;
  align-items: center;
`;
interface ColumnProps {
  top?: string;
  right?: string;
  padding?: string;
}
const ColumnBasic = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  position: absolute;
  top: 2.5rem;
  left: 0;
  background: white;
  padding: 1rem;
  borderradius: 5rem;
  gap: 0.5rem;
  z-index: 20;
`;
const ColumnSingleSelect = styled(ColumnBasic)`
  left: 10rem;
  width: fit-content;
  padding: 0;
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding: 1rem;
    :hover {
      background: #fef9cd;
    }
  }
`;
const Search = () => {
  const labels = {
    travelers: [
      "Adults 18-64",
      "Students over 18",
      "Seniors 65+",
      "Youths 12-17",
      "Children 2-11",
      "Toddlers in own seat under 2",
      "Infants on lap under 2",
    ],
    bags: ["Carry-on bag", "Checked bag"],
    trip: ["One-way", "Round-trip", "Multi-city"],
    flight: ["Economy", "Premium Economy", "Business", "First", "Multiple"],
  };
  const [submit, setSubmit] = useState<boolean>(false);
  const [returnDate, setReturnDate] = useState<string>("");
  const [departureDate, setDepartureDate] = useState<string>("");
  const [departurePlanet, setDeparturePlanet] = useState<string>("");
  const [destinationPlanet, setDestinationPlanet] = useState<string>("");
  const [selected, setSelectedOptions] = useState<number[]>([]);
  const [tabOpen, setTabOpen] = useState<string>("");
  const [filters, setFilters] = useState<any>({
    Travelers: 0,
    Bags: 0,
    Trip: null,
    Flight: null,
  });
  const [openFilter, setOpenFilter] = useState<string>("");
  // console.log("openFilter: ", labels[openFilter]);

  const handleSubmit = (e: any) => {
    console.log("returnDate: ", returnDate);
    console.log("departureDate: ", departureDate);
    if (!returnDate) alert("returnDate must be chosen");
    if (!departureDate) alert("departureDate must be chosen");
    if (!departurePlanet) alert("departurePlanet must be chosen");
    if (!destinationPlanet) alert("destinationPlanet must be chosen");
    setSubmit(true);
  };
  const handleSubtract = (filterKey: string) => {
    if (filters[filterKey] > 0) {
      setFilters({ ...filters, [filterKey]: filters[filterKey] - 1 });
    }
  };

  const handleAdd = (filterKey: string) => {
    setFilters({ ...filters, [filterKey]: filters[filterKey] + 1 });
  };

  const handleDropdown = (label: string) => {
    console.log("label: ", label);
    setTabOpen(label);
  };
  const handleClick = (e: string) => {
    //display user's selection
    alert(e);
  };

  return (
    <div className="main">
      {/* <Row className="blob-main-div" style={{ height: "fit-content" }}>
        <div className="blob-container">
          <h1 className="blob-header">
            <span>
              DUNE
              <br />
              AIR
            </span>
          </h1>
          <div className="blobs_1"></div>
          <div className="blobs_2"></div>
          <div className="blobs_3"></div>
          <div className="blobs_4"></div>
          <div className="blobs_5"></div>
          <div className="blobs_6"></div>
          <div className="blobs_7"></div>
        </div>
      </Row> */}
      <div className="glass">
        <Row>
          <Title>Where are you flying?</Title>
        </Row>
        <Row
          style={{
            width: "fit-content",
            background: "white",
            borderRadius: "0.5rem",
            marginBottom: "0.5rem",
            padding: "0.5rem",
            fontSize: "0.8rem",
            gap: "1rem",
            position: "relative",
          }}
        >
          {labels
            ? Object.keys(labels).map((label) => {
                return (
                  <div key={label} onClick={() => handleDropdown(label)}>
                    <Label label={label} />
                  </div>
                );
              })
            : null}
          {tabOpen === "travelers" ? (
            <ColumnBasic>
              {labels["travelers"].map((filter) => {
                return (
                  <Filter
                    label={filter}
                    handleSubtract={() => handleSubtract(filter)}
                    handleAdd={() => handleAdd(filter)}
                    count={filter}
                  />
                );
              })}
            </ColumnBasic>
          ) : null}
          {tabOpen === "bags" ? (
            <ColumnBasic>
              {labels["bags"].map((filter) => {
                return (
                  <Filter
                    label={filter}
                    handleSubtract={() => handleSubtract(filter)}
                    handleAdd={() => handleAdd(filter)}
                    count={filter}
                  />
                );
              })}
            </ColumnBasic>
          ) : null}
          {tabOpen === "trip" ? (
            <ColumnSingleSelect>
              <ul className="dropdown">
                {labels["trip"].map((filter) => (
                  <li key={filter} onClick={() => handleClick(filter)}>
                    {filter}
                  </li>
                ))}
              </ul>
            </ColumnSingleSelect>
          ) : null}

          {tabOpen === "flight" ? (
            <ColumnSingleSelect>
              <ul className="dropdown">
                {labels["flight"].map((filter) => (
                  <li key={filter} onClick={() => handleClick(filter)}>
                    {filter}
                  </li>
                ))}
              </ul>
            </ColumnSingleSelect>
          ) : null}
        </Row>

        <Row>
          <DestinationSection submit={submit} />
          <Calendar
            setReturnDate={setReturnDate}
            setDepartureDate={setDepartureDate}
            submit={submit}
          />
          <Button className="button-85" onClick={handleSubmit}>
            BLASTOFF!
          </Button>
        </Row>
        <Row>
          <Title>Explore planets nearby</Title>
        </Row>
        <Row>
          <PlanetGrid />
        </Row>
        <Row style={{ height: "5rem" }}></Row>
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <Row style={{ height: "5rem" }}></Row>
    </div>
  );
};

export default Search;
