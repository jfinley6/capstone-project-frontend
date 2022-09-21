import React from "react";
import MainPage from "./MainPage";

import { Switch, Route, useHistory } from "react-router-dom";

import Home from "./Home";

function Content({
  w3_open,
  w3_close,
  user,
  loggedInStatus,
  screen,
  setScreen,
  setLoggedInStatus,
  handleLogin,
}) {

  const history = useHistory()
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <MainPage w3_open={w3_open} w3_close={w3_close} />
        </Route>
        <Route exact path="/home">
          <Home
            w3_open={w3_open}
            w3_close={w3_close}
            screen={screen}
            setScreen={setScreen}
            loggedInStatus={loggedInStatus}
            setLoggedInStatus={setLoggedInStatus}
            handleLogin={handleLogin}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default Content;
