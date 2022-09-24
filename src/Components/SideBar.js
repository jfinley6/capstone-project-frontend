import React from "react";
import { useHistory } from "react-router-dom";

function SideBar({
  w3_close,
  user,
  loggedInStatus,
  handleLogout,
  setScreen,
  setDiscs,
  setChange,
  setPage,
  cartNumber,
}) {
  const history = useHistory();

  function myAccFunc() {
    var x = document.getElementById("demoAcc");
    if (x.className.indexOf("w3-show") === -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }

  

  return (
    <nav
      className="w3-sidebar w3-bar-block w3-white w3-collapse w3-top"
      style={{ zIndex: "3", width: "250px" }}
      id="mySidebar"
    >
      <div className="w3-container w3-display-container w3-padding-16">
        <i
          onClick={() => w3_close()}
          className="fa fa-remove w3-hide-large w3-button w3-display-topright"
        ></i>
        <h3
          onClick={() => {
            history.push("/");
            window.scrollTo(0, 0);
          }}
          className="w3-wide"
          role="button"
        >
          <b>Out of Bounds Discs</b>
        </h3>
      </div>
      <div
        className="w3-large w3-text-grey d-flex flex-column align-items-center"
        style={{
          fontWeight: "bold",
          paddingTop: "25px",
          paddingBottom: "35px",
        }}
      >
        {loggedInStatus === "LOGGED_IN" ? (
          <>
            <img
              role="button"
              src={user.picture}
              alt="Generic placeholder"
              className="rounded-circle img-fluid mx-2"
              style={{ width: "65px" }}
            ></img>

            <button
              onClick={handleLogout}
              className="btn btn-outline-primary mt-2"
            >
              Logout
            </button>
          </>
        ) : (
          <div>
            <button
              onClick={() => {
                setScreen(true);
                history.push("/authenticate")
                window.scrollTo(0,0);
              }}
              className="w-75 btn btn-primary text-center mb-2"
            >
              Login
            </button>
            <button
              onClick={() => {
                setScreen(false);
                history.push("/authenticate");
                window.scrollTo({ top: 0, left: 0, behavior: "auto" });
              }}
              className="w-75 btn btn-outline-primary text-center"
            >
              Signup
            </button>
          </div>
        )}
        <header className="w3-container w3-xlarge mt-2">
          <p className="w3-left mb-2 mt-1">
            <i role="button" className="fa" style={{ fontSize: "24px" }}>
              &#xf07a;
            </i>
            <span className="badge badge-warning mr-1" id="lblCartCount">
              {" "}
              {cartNumber}{" "}
            </span>
            <i role="button" className="fa fa-search"></i>
          </p>
        </header>
        <button
          onClick={() => myAccFunc()}
          id="myBtn"
          className="w3-bar-item w3-button text-center"
        >
          Discs <i className="fa fa-caret-down"></i>
        </button>
        <div
          id="demoAcc"
          className="w3-bar-block w3-hide w3-padding-large w3-medium"
        >
          <button
            onClick={() => {
              setDiscs([]);
              history.push("/category/all");
              setChange((current) => !current);
              setPage(1);
            }}
            className="w3-bar-item w3-button"
          >
            All
          </button>
          <button
            onClick={() => {
              setDiscs([]);
              history.push("/category/putter");
              setChange((current) => !current);
              setPage(1);
            }}
            className="w3-bar-item w3-button"
          >
            Putter
          </button>
          <button
            onClick={() => {
              setDiscs([]);
              history.push("/category/approach");
              setChange((current) => !current);
              setPage(1);
            }}
            className="w3-bar-item w3-button"
          >
            Approach
          </button>
          <button
            onClick={() => {
              setDiscs([]);
              history.push("/category/midrange");
              setChange((current) => !current);
              setPage(1);
            }}
            className="w3-bar-item w3-button"
          >
            Midrange
          </button>
          <button
            onClick={() => {
              setDiscs([]);
              history.push("/category/control-driver");
              setChange((current) => !current);
              setPage(1);
            }}
            className="w3-bar-item w3-button"
          >
            Control Driver
          </button>
          <button
            onClick={() => {
              setDiscs([]);
              history.push("/category/hybrid-driver");
              setChange((current) => !current);
              setPage(1);
            }}
            className="w3-bar-item w3-button"
          >
            Hybrid Driver
          </button>
          <button
            onClick={() => {
              setDiscs([]);
              history.push("/category/distance-driver");
              setChange((current) => !current);
              setPage(1);
            }}
            className="w3-bar-item w3-button"
          >
            Distance Driver
          </button>
        </div>
        <button className="w3-bar-item w3-button text-center">
          Manufacturers
        </button>
      </div>

      <a
        href="#footer"
        onClick={() => {
          w3_close()
          document.getElementById("footer").scrollIntoView()}}
        className="w3-bar-item w3-button w3-padding text-center"
      >
        Contact
      </a>
    </nav>
  );
}

export default SideBar;
