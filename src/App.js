import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./App.css";

import Content from "./Components/Content";
import SideBar from "./Components/SideBar";
import CartModal from "./Components/CartModal";

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

  const history = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:3001/shopping_cart", {
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
    axios.get("http://localhost:3001").then((response) => {
      if (response.data.status === "Nobodies home") {
        setHeroku("ready");
        checkLoginStatus();
      }
    });
  }, []);

  function checkLoginStatus() {
    axios
      .get("http://localhost:3001/logged_in", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.logged_in && loggedInStatus === "NOT_LOGGED_IN") {
          setLoggedInStatus("LOGGED_IN");
          setUser(response.data.user);
          history.push("/");
        } else if (!response.data.logged_in && loggedInStatus === "LOGGED_IN") {
          setLoggedInStatus("NOT_LOGGED_IN");
          setUser({});
        } else if (!response.data.logged_in) {
          setUser({});
          history.push("/");
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
      .delete("http://localhost:3001/logout", {
        withCredentials: true,
      })
      .then(() => {
        setLoggedInStatus("NOT_LOGGED_IN");
        setUser({});
        setCartNumber(0);
        setCart([]);
        setCartTotal(0);
      })
      .catch((error) => console.log(error));
  }

  function addToCart(disc_id) {
    axios
      .post(`http://localhost:3001/new/${user.id}/${disc_id}`)
      .then((response) => {
        setCartNumber(cartNumber + 1);
        setCart((cart) => [...cart, response.data]);
        setCartTotal(cartTotal + response.data.price);
      });
  }

  function cartRemoveAll() {
    axios.delete(`http://localhost:3001/delete/${user.id}`).then(() => {
      setCartNumber(0);
      setCart([]);
      setCartTotal(0);
    });
  }

  function removeCartItem(disc_id) {
    axios
      .delete(`http://localhost:3001/destroy/${user.id}/${disc_id}`)
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
      history.push("/checkout");
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
          <Content
            discs={discs}
            setDiscs={setDiscs}
            loggedInStatus={loggedInStatus}
            user={user}
            w3_close={w3_close}
            w3_open={w3_open}
            screen={screen}
            setScreen={setScreen}
            setLoggedInStatus={setLoggedInStatus}
            handleLogin={handleLogin}
            change={change}
            page={page}
            setPage={setPage}
            discCategory={discCategory}
            sortType={sortType}
            setSortType={setSortType}
            setDiscCategory={setDiscCategory}
            setChange={setChange}
            setCart={setCart}
            cart={cart}
            addToCart={addToCart}
            removeCartItem={removeCartItem}
            cartTotal={cartTotal}
            cartNumber={cartNumber}
            setCartTotal={setCartTotal}
            setCartNumber={setCartNumber}
          />
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
      ) : null}
    </>
  );
}

export default App;


let items = [12, 548, "a", 2, 5478, "foo", 8852, , "Doe", 2145, 119];

let randomItem = items[Math.floor(Math.random() * items.length)];