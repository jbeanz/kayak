import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FlexboxVertical, Header, Input } from "../../StyledComponents";
function ResetPassword() {
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
    <FlexboxVertical>
      <Header>Welcome to Dune Air</Header>
      <section>
        <Input
          type="text"
          placeholder={"username"}
          value={usernameInput}
          onChange={handleChangeUsername}
          required
        />
        <Input
          type="password"
          placeholder={"password"}
          value={passwordInput}
          onChange={handleChangePassword}
          required
        />
        {/* <Button disabled={buttonDisabled} onClick={handleSubmit}>
          Sign In
        </Button> */}
      </section>

      <Header>
        Forgot your password?
        <Link to="/reset-password">Reset Password</Link>
      </Header>
    </FlexboxVertical>
  );
}
export default ResetPassword;
