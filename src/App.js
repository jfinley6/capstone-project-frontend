import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./App.css";

import Content from "./Components/Content";
import SideBar from "./Components/SideBar";

function App() {
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");
  const [user, setUser] = useState({});
  const [discs, setDiscs] = useState([]);
  const [screen, setScreen] = useState(true);
  const [heroku, setHeroku] = useState("not ready");
  const [change, setChange] = useState(false)
  const [page, setPage] = useState(1);
  const [cartNumber, setCartNumber] = useState(0)

  const history = useHistory();

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
        setUser({});;
      })
      .catch((error) => console.log(error));
  }

  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }

  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    // document.getElementById("myOverlay").style.display = "none";
  }

  return (
    <>
      {heroku === "ready" ? <div className="App d-flex flex-column justify-content-center">
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
        />
      </div> : null}
    </>
  );
}

export default App;
