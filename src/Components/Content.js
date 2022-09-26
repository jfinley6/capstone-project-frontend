import React from "react";
import MainPage from "./MainPage";
import Discs from "./Discs";

import { Switch, Route } from "react-router-dom";

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
  setDiscs,
  change,
  page,
  setPage,
  discCategory,
  sortType,
  setSortType,
  setDiscCategory,
  setChange,
  setCart,
  cart,
  addToCart,
  removeCartItem
}) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <MainPage
            w3_open={w3_open}
            w3_close={w3_close}
            setDiscCategory={setDiscCategory}
            setDiscs={setDiscs}
            setChange={setChange}
            setPage={setPage}
            setSortType={setSortType}
          />
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
        <Route exact path="/category/:category_slug">
          <Discs
            change={change}
            page={page}
            setPage={setPage}
            discs={discs}
            setDiscs={setDiscs}
            w3_open={w3_open}
            w3_close={w3_close}
            discCategory={discCategory}
            sortType={sortType}
            setSortType={setSortType}
            user={user}
            setCart={setCart}
            cart={cart}
            addToCart={addToCart}
            removeCartItem={removeCartItem}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default Content;
