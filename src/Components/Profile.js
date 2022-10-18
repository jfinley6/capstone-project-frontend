import React, { useEffect, useState } from "react";
import SmallHeader from "./SmallHeader";
import "/Users/johnfinley/Development/code/phase-5/capstone-frontend/src/Profile.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Profile({ user }) {
  const [orders, setOrders] = useState([]);
  const [show, setShow] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [status, setStatus] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get(`https://warm-journey-57671.herokuapp.com/user_orders/${user.id}`)
      .then((response) => {
        setOrders(response.data);
      });
  }, []);

  const orderButtons = orders.map((order) => {
    return (
      <div
        key={order.id}
        onClick={() => {
          setIdentifier(order.identifier);
          setStatus(order.status);
          handleShow();
        }}
        className="col-md-12 mb-2"
      >
        <button className=" w-100 btn btn-primary">{order.identifier}</button>
      </div>
    );
  });

  return (
    <div className="d-flex justify-content-center">
      <SmallHeader />
      <div
        id="profile"
        className="container-fluid d-flex justify-content-center bg-trasparent mt-lg-0 mt-sm-5 mt-xs-5 p-xs-5 pt-sm-5"
        style={{
          position: "relative",
          marginLeft: "250px",
          width: "fit-content",
        }}
      >
        <div className="container rounded bg-white mt-5 mb-5">
          <div className="row">
            <div className="col border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img
                  className="rounded-circle mt-5"
                  style={{ width: "150px" }}
                  src={user.picture}
                />
                <span className="font-weight-bold">{user.email}</span>
                <span> </span>
              </div>
            </div>
            <div className="col w-100">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <h4>User Reservations</h4>
                </div>
                <div
                  className="col-md-12 mt-3 w-100"
                  style={{ height: "40vh", overflow: "scroll" }}
                >
                  {orderButtons}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>Order: {identifier}</Modal.Body>
        <Modal.Body>Status: {status}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Profile;
