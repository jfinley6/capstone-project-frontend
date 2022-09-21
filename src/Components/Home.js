import React from "react";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import { useHistory } from "react-router-dom";

function Home({ handleLogin, screen, setScreen, w3_open, w3_close }) {
  const history = useHistory();

  function handleSuccessfulAuth(data) {
    handleLogin(data);
    history.push("/");
  }

  return (
   <> <header
        className="w3-bar w3-top w3-hide-large w3-black"
        style={{ height: "10vh" }}
      >
        <div className="w3-bar-item w3-padding-24 w3-wide">
          Out of Bounds Discs
        </div>
        <a
          className="w3-bar-item w3-button w3-padding-24 w3-right"
          onClick={() => w3_open()}
        >
          <i className="fa fa-bars"></i>
        </a>
      </header>
    <div className="w3-main d-flex flex-column justify-content-center align-items-center" style={{marginLeft: "250px", marginTop: "70px"}}>
      <h1>{screen ? "Login" : "Signup"}</h1>
      {screen !== true ? (
        <Registration
          handleSuccessfulAuth={handleSuccessfulAuth}
          setScreen={setScreen}
        />
      ) : null}
      {screen == true ? (
        <Login
          handleSuccessfulAuth={handleSuccessfulAuth}
          setScreen={setScreen}
        />
      ) : null}
    </div></>
  );
}

export default Home;
