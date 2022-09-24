import React from "react";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import { useHistory } from "react-router-dom";
import SmallHeader from "./SmallHeader";

function Home({ handleLogin, screen, setScreen, w3_open, w3_close }) {
  const history = useHistory();

  function handleSuccessfulAuth(data) {
    handleLogin(data);
    history.push("/");
  }

  return (
    <>
      {" "}
      <SmallHeader w3_open={w3_open} />
      <div
        className="w3-main d-flex flex-column justify-content-center align-items-center"
        style={{ marginLeft: "250px", marginTop: "70px" }}
      >
        <h1>{screen ? "Login" : "Signup"}</h1>
        {screen !== true ? (
          <Registration
            handleSuccessfulAuth={handleSuccessfulAuth}
            setScreen={setScreen}
          />
        ) : null}
        {screen === true ? (
          <Login
            handleSuccessfulAuth={handleSuccessfulAuth}
            setScreen={setScreen}
          />
        ) : null}
      </div>
    </>
  );
}

export default Home;
