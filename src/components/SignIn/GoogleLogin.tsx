import { GoogleLogin } from "react-google-login";
import { useState } from "react";
require("default-passive-events");

const DuneGoogleLogin = () => {
  //save login info in localStorage
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData") as string)
      : null
  );
  const handleLogin = async (googleResponse: any) => {
    const res = await fetch("/api/google-login", {
      method: "POST",
      body: JSON.stringify({
        token: googleResponse.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setLoginData(data);
    localStorage.setItem("loginData", JSON.stringify(data));
  };
  const handleFailure = (err: any) => {
    console.log("err: ", err);
    // alert(err); - FIX
  };
  const handleLogout = () => {
    localStorage.removeItem("loginData");
    setLoginData(null);
  };
  return (
    <>
      {loginData ? (
        <div>
          <h3> You logged in as {loginData.email}</h3>
          <button onClick={handleLogout}> Logout</button>
        </div>
      ) : (
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
          buttonText="Log in with Google"
          onSuccess={handleLogin}
          onFailure={handleFailure}
          cookiePolicy={"single_host_origin"}
        ></GoogleLogin>
      )}
    </>
  );
};

export default DuneGoogleLogin;
