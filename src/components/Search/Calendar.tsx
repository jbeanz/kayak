import { useState, useEffect } from "react";
import styled from "styled-components";

interface Props {
  setReturnDate: React.Dispatch<React.SetStateAction<string>>;
  setDepartureDate: React.Dispatch<React.SetStateAction<string>>;
  submit: boolean;
}
const Input = styled.input`
  border-radius: 0.5rem;
  border: none;
  outline: 0;
  padding: 0.75em 1rem;
`;

const CalendarContainer = styled.div`
  border-radius: 0.5rem;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  div {
    width: 1px;
    height: 1.3rem;
    background-color: #0e89f4;
  }
`;

const Calendar = ({ setReturnDate, setDepartureDate, submit }: Props) => {
  const [min, setMin] = useState<string>("");
  const [arrivalPlaceholder, setArrivalPlaceholder] = useState<string>("");
  const [departurePlaceholder, setDeparturePlaceholder] = useState<string>("");
  const [max, setMax] = useState<string>("");
  const [departureMax, setDepartureMax] = useState<string>("");
  const [arrivalMin, setArrivalMin] = useState<string>("");

  //default setting
  useEffect(() => {
    const date = new Date();
    const today = date.toISOString().split("T")[0];
    const tripLength = new Date(date.setDate(date.getDate() + 5));
    const arrive = tripLength.toISOString().split("T")[0];
    const availableDepartureRange = new Date(date.setDate(date.getDate() + 60));
    const max = availableDepartureRange.toISOString().split("T")[0];
    setMin(today);
    setMax(max);
    setArrivalPlaceholder(arrive);
    setDeparturePlaceholder(today);
    setDepartureMax(max);
    setArrivalMin(today);
  }, []);

  const handleDeparture = (e: any) => {
    const date = e.target.value;
    setDepartureDate(date);
    setArrivalMin(date);
    setArrivalPlaceholder("");
  };
  const handleReturn = (e: any) => {
    setReturnDate(e.target.value);
    setDepartureMax(e.target.value);
    setDeparturePlaceholder("");
  };

  return (
    <CalendarContainer>
      <Input
        type="date"
        defaultValue={departurePlaceholder}
        min={min}
        max={departureMax}
        onChange={handleDeparture}
      ></Input>
      <div className="dividing-line"></div>
      <Input
        type="date"
        defaultValue={arrivalPlaceholder}
        min={arrivalMin}
        max={max}
        onChange={handleReturn}
      ></Input>
    </CalendarContainer>
  );
};
export default Calendar;
