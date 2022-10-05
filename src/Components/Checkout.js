import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import SmallHeader from "./SmallHeader";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function Checkout({ cart, cartTotal, cartNumber, user, setCart, setCartTotal, setCartNumber }) {
  const [show, setShow] = useState(false);
  const [orderId, setOrderId] = useState("")

  const history = useHistory();

  function handleClose() {
    setCart([])
    setCartNumber(0)
    setCartTotal(0)
    setShow(false)
    history.push("/")
  }

  useEffect(() => {
    const orderNumber = require("ordersid-generator");
    setOrderId(orderNumber("short","OOB"))
  },[])

  function handleShow(event) {
  
    event.preventDefault()
    axios.post(
      `http://localhost:3001/order/${user.id}/${orderId}/${cartTotal.toString()}`
    ).then((response) => console.log(response))
    setShow(true)
  }
    useEffect(() => {
    if (cart.length === 0) {
      history.push("/");
    }
  }, [cart]);

  const cartNames = cart.map((item) => {
    return (
      <p key={item.id} className="d-flex">
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
        className="w3-main d-flex flex-column justify-content-center align-items-center mb-3 mt-lg-0 mt-sm-5 mt-xs-5 p-xs-5 pt-sm-5"
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
        <form
          onSubmit={handleShow}
          className="form-check d-flex flex-column w-50"
        >
          <div className="d-flex flex-column">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              required="required"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              By reserving, you agree to pick up your order within 24 hours
            </label>
            <div>
              <button type="submit" className="w-50 mb-3 mt-2 btn btn-primary">
                Reserve
              </button>
            </div>
          </div>
        </form>
        <div className="w-100">
          <Footer />
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reservation Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>Congratulations on your reservation!</Modal.Body>
        <Modal.Body>Your order number is {orderId} !</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Checkout;
