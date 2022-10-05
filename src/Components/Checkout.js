import React, { useEffect } from "react";
import Footer from "./Footer";
import SmallHeader from "./SmallHeader";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";

function Checkout({ cart, cartTotal, cartNumber }) {
  const history = useHistory();
  useEffect(() => {
    if (cart.length === 0) {
      history.push("/");
    }
  }, [cart]);

  const cartNames = cart.map((item) => {
    return (
      <p key={cart.id} className="d-flex">
        <p className="w-100" href="#">
          {item.name}
        </p>{" "}
        <div>${item.price}</div>
      </p>
    );
  });
  return (
    <div>
      <SmallHeader />
      <div
        className="w3-main d-flex flex-column justify-content-center align-items-center mb-3"
        style={{ marginLeft: "250px", marginTop: "70px" }}
      >
        <h1 className="text-left" style={{ fontFamily: "copperplate" }}>
          Reservation
        </h1>
        <div className="mr-0 w-75 mb-4">
          <div className="container">
            <form action="/action_page.php">
              <div className="row">
                <div className="col-25">
                  <div className="container">
                    <h4 className="d-flex justify-content-between">
                      Order
                      <span className="price" style={{ color: "black" }}>
                        <i className="fa fa-shopping-cart"></i>
                        <b> {cartNumber}</b>
                      </span>
                    </h4>
                    {/* <p>
                      <a href="#">Product 1</a>{" "}
                      <span className="price">$15</span>
                    </p> */}
                    {cartNames}
                    <hr />
                    <p className="d-flex justify-content-between">
                      Total{" "}
                      <span className="price" style={{ color: "black" }}>
                        <b>${cartTotal.toFixed(2)}</b>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="form-check d-flex flex-column w-50">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            By reserving, you agree to pick up your order within 24 hours
          </label>
          <div>
            <button className="w-50 mb-3 mt-2 btn btn-primary">Reserve</button>
          </div>
        </div>
        <div className="w-100">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
