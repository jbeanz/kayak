import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../StyledComponents";
import { LineWithText } from "../../StyledComponents";
import DuneGoogleLogin from "./GoogleLogin";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  a,
  p {
    color: black;
    font-weight: bold;
    font-size: 0.8rem;
    padding: 0;
    margin: 0;
    text-align: center;
    width: 10rem;
  }
  a {
    color: #5138ee;
  }
  a:hover {
    text-decoration: underline;
    background-color: white;
  }
`;
const Title = styled.h1`
  color: #0a061b;
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
    <div className="login">
      <Column>
        <Title>Welcome to Dune Air</Title>
        <DuneGoogleLogin />
        <LineWithText className="card-text">
          <span>or Sign in with Email</span>
        </LineWithText>
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
        <Link to="/reset-password">Forgot password?</Link>
        <Row>
          <p>Not registered yet?</p>
          <Link to="/create-account">Create an Account</Link>
        </Row>
      </Column>
    </div>
  );
}
export default SignIn;
