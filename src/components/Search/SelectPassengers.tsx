import { useState, useEffect } from "react";
import styled from "styled-components";

interface Props {
  numberOfPassengers: number;
  label: string;
}
const SingleSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: white;
  color: black;
  border-radius: 0.5rem;
  height: 2.3rem;
`;
const SelectPassengers = ({ numberOfPassengers, label }: Props) => {
  const [selected, setSelected] = useState<string>("");
  const options: number[] = [];

  for (let i = 0; i < numberOfPassengers; i++) {
    options.push(i);
  }
  console.log("options: ", options);

  useEffect(() => {
    setSelected("");
  }, []);

  const handleSelect = (e: any) => {
    setSelected(e.target.value);
  };

  return (
    <SingleSelect>
      <h2>{label}</h2>
      <form action="#">
        <select
          className="c-single-select-dropdown"
          value={selected}
          onChange={handleSelect}
          name="single-select"
          id="single-select"
        >
          {options
            ? options.map((index) => (
                <option
                  className=".c-single-select-dropdown_option"
                  key={index}
                >
                  {index}
                </option>
              ))
            : null}
        </select>
      </form>
    </SingleSelect>
  );
};
export default SelectPassengers;
