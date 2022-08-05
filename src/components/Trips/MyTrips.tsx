import React, { useEffect, useState } from "react";
import styled from "styled-components";
import mars from "../../img/mars.webp";
import arrakis from "../../img/arrakis.jpeg";
import moon from "../../img/moon.jpeg";
import CardLink from "./CardLink";
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  gap: 1rem;
  width: 40vw;
`;
const Title = styled.h1`
  color: #0a061b;
`;
const Subtitle = styled.h2`
  color: #0a061b;
`;

const Card = styled.div`
  width: 40vw;
  height: 40vh;
  background: white;
  border-radius: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

const PlanetImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 1rem;
`;
function MyTrips() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  useEffect(() => {
    if (usernameInput !== "" && passwordInput !== "") setButtonDisabled(false);
  }, [usernameInput, passwordInput]);

  useEffect(() => {
    setUsernameInput("");
    setPasswordInput("");
  }, []);

  const handleSubmit = (e: any) => {
    const username = usernameInput.toLowerCase();
    for (const char of username) {
      if (!isNaN(+char)) alert("email invalid");
    }
  };

  const handleChangePassword = (e: any) => {
    setPasswordInput(e.target.value);
  };
  const handleChangeUsername = (e: any) => {
    setUsernameInput(e.target.value);
  };
  return (
    <div>
      <Row>
        <Title>Trips</Title>
      </Row>
      <Row>
        <Subtitle>Upcoming 2022</Subtitle>
      </Row>
      <Row>
        <Column>
          <Card>
            <PlanetImage src={mars} alt="mars" />
          </Card>
          <Card>
            <PlanetImage src={arrakis} alt="arrakis" />
          </Card>
          <Card>
            <PlanetImage src={moon} alt="moon" />
          </Card>
        </Column>
      </Row>
      <Row>
        <Column>
          <CardLink title="You have unused airline credits" subtitle="" />
          <CardLink title="Past" subtitle="View details" />
          <CardLink title="Canceled" subtitle="View more details" />
          <CardLink
            title="Find your booking"
            subtitle="Use your itinerary number to look it up"
          />
        </Column>
      </Row>
    </div>
  );
}
export default MyTrips;
