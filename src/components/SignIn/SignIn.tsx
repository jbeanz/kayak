import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FlexboxVertical, Header, Input } from "../../StyledComponents";
import { LineWithText } from "../../StyledComponents";
import DuneGoogleLogin from "./GoogleLogin";
import styled from "styled-components";
const FlexBox = styled(FlexboxVertical)`
  background: white;
  padding: 2rem 2rem 2rem;
  border-radius: 1rem;
`;
const Section = styled.section`
  padding: 1rem;

  display: flex;
  justify-content: center;
  a,
  p {
    color: black;
    font-weight: bold;
    font-size: 0.8em;
    padding: 0;
    margin: 0;
    text-align: center;
    width: 10em;
  }
  a {
    color: #5138ee;
  }
  a:hover {
    text-decoration: underline;
    background-color: white;
  }
`;
const Card = styled(FlexboxVertical)`
  background-image: linear-gradient(to top, #e8198b 0%, #c7eafd 100%);
  height: 100vh;
  width: 100vw;
  position: relative;
`;

function SignIn() {
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
    <Card>
      <FlexBox>
        <Header className="card-title">Welcome to Dune Air</Header>
        <DuneGoogleLogin />
        <LineWithText className="card-text">
          <span>or Sign in with Email</span>
        </LineWithText>
        <section>
          <form className="card-login-password-container">
            <Input
              type="text"
              placeholder={"username"}
              value={usernameInput}
              onChange={handleChangeUsername}
              required
              autoComplete="username"
            />
            <Input
              type="password"
              placeholder={"password"}
              value={passwordInput}
              onChange={handleChangePassword}
              required
              autoComplete="current-password"
            />
            <button disabled={buttonDisabled} onClick={handleSubmit}>
              Sign In
            </button>
          </form>
        </section>
        <Section>
          <Link to="/reset-password">Forgot password?</Link>
        </Section>
        <Section>
          <p>Not registered yet?</p>
          <Link to="/reset-password">Create an Account</Link>
        </Section>{" "}
      </FlexBox>
    </Card>
  );
}
export default SignIn;
