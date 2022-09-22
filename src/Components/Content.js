import React, { useState, useEffect } from "react";
import MainPage from "./MainPage";
import Discs from "./Discs";

import { Switch, Route, useHistory, w3_open, w3_close } from "react-router-dom";

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
  discs,
  setDiscs
}) {
  const history = useHistory();
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <MainPage w3_open={w3_open} w3_close={w3_close} />
        </Route>
        <Route exact path="/authenticate">
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
        <Route exact path="/category/:category_slug/:page">
          <Discs discs={discs} setDiscs={setDiscs} w3_open={w3_open} w3_close={w3_close}/>
        </Route>
      </Switch>
    </div>
  );
}

export default Content;
