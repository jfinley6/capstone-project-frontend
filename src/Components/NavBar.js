import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBadge,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";

function NavBar({ loggedInStatus, setScreen, handleLogout, user }) {
  const [showBasic, setShowBasic] = useState();
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
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand
          role="button"
          className="d-lg-flex w-100 text-sm-center col-sm-n mx-0"
          onClick={() => history.push("/")}
        >
          Out of Bound Discs
        </MDBNavbarBrand>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem className="d-flex justify-content-center align-items-center mx-3">
              {loggedInStatus === "LOGGED_IN" ? (
                <><img
                  role="button"
                  src={user.picture}
                  alt="Generic placeholder image"
                  className="img-fluid rounded-circle"
                  style={{ width: "50px" }}
                ></img>
                <button onClick={handleLogout} className="btn btn-outline-primary ">Logout</button></>
              ) : (
                <MDBNavbarLink
                  role="button"
                  className="py-0"
                  onClick={() => history.push("/home")}
                >
                  Login/Signup
                </MDBNavbarLink>
              )}
            </MDBNavbarItem>

            <MDBNavbarItem className="d-flex justify-content-center align-items-center">
              <MDBNavbarLink className="d-flex" href="#">
                <MDBBadge
                  className="d-flex align-items-center"
                  pill
                  color="danger"
                >
                  0
                </MDBBadge>
                <span>
                  <MDBIcon fas icon="shopping-cart"></MDBIcon>
                </span>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default NavBar;
