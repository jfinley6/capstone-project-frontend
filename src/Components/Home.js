import React from "react";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import { useHistory } from "react-router-dom";

function Home({ handleLogin, screen, setScreen }) {
  const history = useHistory();

  function handleSuccessfulAuth(data) {
    handleLogin(data);
    history.push("/");
  }

  return (
    <div className="fade-in d-flex flex-column align-items-center mt-2">
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
    </div>
  );
}

export default Home;
