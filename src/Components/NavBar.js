import React from "react";
import { useHistory } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";


function NavBar({ loggedInStatus, setScreen, handleLogout }) {
  const history = useHistory();

  return (
    // <nav className="sticky-top navbar navbar-light bg-light justify-content-between align-items-center">
    //   <div className="d-flex flex-column">
    //     <h2
    //       role="button"
    //       onClick={() => {
    //         history.push("/");
    //       }}
    //       className="mx-3 mb-0"
    //     >
    //       Out of Bounds Discs
    //     </h2>
    //     <form class="form-inline d-flex mx-2">
    //         <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    //         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    //       </form>
    //   </div>

    //   {loggedInStatus === "NOT_LOGGED_IN" ? (
    //     <div>
    //       <button
    //         onClick={() => {
    //           setScreen(true);
    //           history.push("/home");
    //         }}
    //         className="btn btn-primary my-2 mx-2 my-sm-0"
    //         type="submit"
    //       >
    //         Login
    //       </button>
    //     </div>
    //   ) : (
    //     <div>
    //       <button
    //         onClick={() => {
    //           history.push("/user");
    //         }}
    //         className="btn btn-primary my-2 mx-2 my-sm-0  "
    //       >
    //         Profile
    //       </button>
    //       <button
    //         onClick={handleLogout}
    //         className="btn btn-outline-primary my-2 mx-2 my-sm-0"
    //         type="submit"
    //       >
    //         Logout
    //       </button>
    //     </div>
    //   )}
    // </nav>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Out of Bounds Discs
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0 d-flex">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
