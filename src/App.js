import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import SideBar from "./Components/SideBar";
import CartModal from "./Components/CartModal";
import MainPage from "./Components/MainPage";
import Discs from "./Components/Discs";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import DiscPage from "./Components/DiscPage";

function App() {
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");
  const [user, setUser] = useState({});
  const [discs, setDiscs] = useState([]);
  const [screen, setScreen] = useState(true);
  const [heroku, setHeroku] = useState("not ready");
  const [change, setChange] = useState(false);
  const [page, setPage] = useState(1);
  const [cartNumber, setCartNumber] = useState(0);
  const [discCategory, setDiscCategory] = useState("All Discs");
  const [sortType, setSortType] = useState("name");
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://warm-journey-57671.herokuapp.com/shopping_cart", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.shopping_cart === false) {
          return;
        } else {
          setCartNumber(response.data.total_items);
          setCartTotal(response.data.total_price);
          setCart(response.data.discs);
        }
      });
  }, [loggedInStatus]);

  useEffect(() => {
    axios.get("https://warm-journey-57671.herokuapp.com").then((response) => {
      if (response.data.status === "Nobodies home") {
        setHeroku("ready");
        checkLoginStatus();
      }
    });
  }, []);

  function checkLoginStatus() {
    axios
      .get("https://warm-journey-57671.herokuapp.com/logged_in", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.logged_in && loggedInStatus === "NOT_LOGGED_IN") {
          setLoggedInStatus("LOGGED_IN");
          setUser(response.data.user);
          navigate("/");
        } else if (!response.data.logged_in && loggedInStatus === "LOGGED_IN") {
          setLoggedInStatus("NOT_LOGGED_IN");
          setUser({});
        } else if (!response.data.logged_in) {
          setUser({});
          navigate("/");
        }
      })
      .catch((error) => console.log(error));
  }

  function handleLogin(data) {
    setLoggedInStatus("LOGGED_IN");
    setUser(data);
  }

  function handleLogout() {
    axios
      .delete("https://warm-journey-57671.herokuapp.com/logout", {
        withCredentials: true,
      })
      .then(() => {
        setLoggedInStatus("NOT_LOGGED_IN");
        setUser({});
        setCartNumber(0);
        setCart([]);
        setCartTotal(0);
        navigate("/");
      })
      .catch((error) => console.log(error));
  }

  function addToCart(disc_id) {
    if (loggedInStatus === "NOT_LOGGED_IN") {
      navigate("/authenticate");
    }

    axios
      .post(
        `https://warm-journey-57671.herokuapp.com/new/${user.id}/${disc_id}`
      )
      .then((response) => {
        setCartNumber(cartNumber + 1);
        setCart((cart) => [...cart, response.data]);
        setCartTotal(cartTotal + response.data.price);
      });
  }

  function cartRemoveAll() {
    axios
      .delete(`https://warm-journey-57671.herokuapp.com/delete/${user.id}`)
      .then(() => {
        setCartNumber(0);
        setCart([]);
        setCartTotal(0);
      });
  }

  function removeCartItem(disc_id) {
    axios
      .delete(
        `https://warm-journey-57671.herokuapp.com/destroy/${user.id}/${disc_id}`
      )
      .then(() => {
        setCartNumber(cartNumber - 1);
        let disc = cart.find((element) => element.id === disc_id);
        setCartTotal(cartTotal - disc.price);
        const newDiscs = cart.filter((item) => item.id !== disc.id);
        setCart(newDiscs);
      });
  }

  function handleReservation() {
    if (cartNumber === 0) {
      return;
    } else {
      window.scrollTo(0, 0);
      setShow(false);
      navigate("/checkout");
    }
  }

  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }

  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }
  function handleClose() {
    setShow(false);
  }

  function handleShow() {
    setShow(true);
  }

  // I'm using "click" but it works with any event
  document.addEventListener("click", (event) => {
    const specifiedElement = document.getElementById("mySidebar");
    const specifiedElement2 = document.getElementById("smallHeader");
    const isClickInside = specifiedElement.contains(event.target);
    const isClickInside2 = specifiedElement2.contains(event.target);

    if (!isClickInside && !isClickInside2) {
      w3_close();
      w3_close();
    } else if (isClickInside2) {
      w3_open();
    }
  });

  return (
    <>
      {heroku === "ready" ? (
        <div className="App d-flex flex-column justify-content-center">
          <SideBar
            w3_close={w3_close}
            user={user}
            loggedInStatus={loggedInStatus}
            handleLogout={handleLogout}
            setScreen={setScreen}
            setDiscs={setDiscs}
            setChange={setChange}
            setPage={setPage}
            cartNumber={cartNumber}
            setDiscCategory={setDiscCategory}
            setSortType={setSortType}
            handleShow={handleShow}
          />
          <Routes>
            <Route
              path="/"
              element={
                <MainPage
                  w3_open={w3_open}
                  w3_close={w3_close}
                  setDiscCategory={setDiscCategory}
                  setDiscs={setDiscs}
                  setChange={setChange}
                  setPage={setPage}
                  setSortType={setSortType}
                />
              }
            ></Route>
            <Route
              path="/authenticate"
              element={
                <Home
                  w3_open={w3_open}
                  w3_close={w3_close}
                  screen={screen}
                  setScreen={setScreen}
                  loggedInStatus={loggedInStatus}
                  setLoggedInStatus={setLoggedInStatus}
                  handleLogin={handleLogin}
                />
              }
            ></Route>
            <Route
              path="/category/:category_slug"
              element={
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
                  loggedInStatus={loggedInStatus}
                />
              }
            ></Route>
            <Route
              path="/checkout"
              element={
                <Checkout
                  cart={cart}
                  cartTotal={cartTotal}
                  cartNumber={cartNumber}
                  user={user}
                  setCart={setCart}
                  setCartNumber={setCartNumber}
                  setCartTotal={setCartTotal}
                />
              }
            ></Route>
            <Route
              path="/disc/:name"
              element={
                <DiscPage
                  addToCart={addToCart}
                  removeCartItem={removeCartItem}
                  cart={cart}
                  loggedInStatus={loggedInStatus}
                />
              }
            ></Route>
            <Route
              path="/profile"
              element={<Profile user={user} loggedInStatus={loggedInStatus} />}
            ></Route>
          </Routes>
          <CartModal
            handleClose={handleClose}
            handleShow={handleShow}
            show={show}
            cartTotal={cartTotal}
            cartRemoveAll={cartRemoveAll}
            cart={cart}
            removeCartItem={removeCartItem}
            cartNumber={cartNumber}
            handleReservation={handleReservation}
          />
        </div>
      ) : (
        <div
          style={{ height: "100vh" }}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <span className="loader"></span>
          <h3>Server Loading</h3>
          <h5>Please Stand By</h5>
        </div>
      )}
    </>
  );
}

export default App;

let items = [12, 548, "a", 2, 5478, "foo", 8852, , "Doe", 2145, 119];

let randomItem = items[Math.floor(Math.random() * items.length)];
