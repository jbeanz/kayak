import React, { useEffect, useState } from "react";
import { Header } from "../StyledComponents";
import styled from "styled-components";
import { Row, Column } from "../StyledComponents";

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
        <Column className="mytrips">
          <section className="upcoming-trips">
            <Header>Upcoming Trips</Header>
            <button disabled={buttonDisabled} onClick={handleSubmit}>
              Edit Trip
            </button>
            <button disabled={buttonDisabled} onClick={handleSubmit}>
              Cancel Trip
            </button>
          </section>
        </Column>
      </Row>
      <Row>
        {" "}
        <Column>
          <section className="past-trips">
            <Header>Past Trips</Header>
            <button disabled={buttonDisabled} onClick={handleSubmit}>
              See Details
            </button>
          </section>
        </Column>
      </Row>
    </div>
  );
}
export default MyTrips;
