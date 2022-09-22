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
    <></>
    // <MDBNavbar
    //   expand="lg"
    //   className="sticky-top"

    // >
    //   <MDBContainer fluid>
    //     <MDBNavbarBrand
    //       role="button"
    //       className="d-lg-flex w-100 text-sm-center col-sm-n mx-0"
    //       onClick={() => history.push("/")}
    //     >
    //       Out of Bound Discs
    //     </MDBNavbarBrand>

    //     <MDBCollapse navbar show={showBasic}>
    //       <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
    //         <MDBNavbarItem className="d-flex justify-content-center align-items-center mx-3">
    //           {loggedInStatus === "LOGGED_IN" ? (
    //             <>
    //               <img
    //                 role="button"
    //                 src={user.picture}
    //                 alt="Generic placeholder image"
    //                 className="rounded-circle img-fluid mx-2"
    //                 style={{ width: "50px" }}
    //               ></img>
    //               <button
    //                 onClick={handleLogout}
    //                 className="btn btn-outline-primary "
    //               >
    //                 Logout
    //               </button>
    //             </>
    //           ) : (
    //             <MDBNavbarLink
    //               role="button"
    //               className="py-0"
    //               onClick={() => history.push("/authenticate")}
    //             >
    //               Login/Signup
    //             </MDBNavbarLink>
    //           )}
    //         </MDBNavbarItem>

    //         <MDBNavbarItem className="d-flex justify-content-center align-items-center">
    //           <MDBNavbarLink className="d-flex" href="#">
    //             <MDBBadge
    //               className="d-flex align-items-center"
    //               pill
    //               color="danger"
    //             >
    //               0
    //             </MDBBadge>
    //             <span>
    //               <MDBIcon fas icon="shopping-cart"></MDBIcon>
    //             </span>
    //           </MDBNavbarLink>
    //         </MDBNavbarItem>
    //       </MDBNavbarNav>
    //     </MDBCollapse>
    //   </MDBContainer>
    // </MDBNavbar>
  );
}

export default NavBar;
