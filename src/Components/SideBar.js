import React from "react";
import { useHistory } from "react-router-dom";

function SideBar({ w3_close, user, loggedInStatus, handleLogout, setScreen }) {
  const history = useHistory();

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
        <h3 onClick={() => history.push("/")} className="w3-wide" role="button">
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
              alt="Generic placeholder image"
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
            <button onClick={() => {
                setScreen(true)
                history.push("/home")}} className="w-75 btn btn-primary text-center mb-2">Login</button>
            <button onClick={() => {
                setScreen(false)
                history.push("/home")
            }}className="w-75 btn btn-outline-primary text-center">
              Signup
            </button>
          </div>
        )}
        <header className="w3-container w3-xlarge mt-2">
          <p className="w3-left mb-2">
            <i className="fa fa-shopping-cart w3-margin-right"></i>
            <i className="fa fa-search"></i>
          </p>
        </header>
        <a href="#" className="w3-bar-item w3-button text-center">
          Discs
        </a>
        <a href="#" className="w3-bar-item w3-button text-center">
          Manufacturers
        </a>
        <a href="#" className="w3-bar-item w3-button text-center">
          Stability
        </a>
        <a href="#" className="w3-bar-item w3-button text-center">
          Category
        </a>
      </div>

      <a
        href="#footer"
        className="w3-bar-item w3-button w3-padding text-center"
      >
        Contact
      </a>
    </nav>
  );
}

export default SideBar;
