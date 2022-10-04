import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CartModal({ handleClose, show, cartTotal, cartRemoveAll, cart, removeCartItem, cartNumber, handleReservation }) {

  const cartItems = cart.map((item) => {
    return (
      <div key={item.id} className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
        <div className="d-flex flex-row">
          <img
            src={item.picture_url}
            width="50"
          />
          <div className="ml-3">
            <span className="font-weight-bold d-block">{item.name}</span>
            <span className="spec">{item.brand}</span>
          </div>
        </div>
        <div className="w-25 d-flex flex-row align-items-center">
          <span className="d-block">1</span>
          <span className="d-block ml-5 font-weight-bold">{item.price}</span>
          <i role="button" onClick={() => removeCartItem(item.id)} className="fa fa-trash-o ml-3 text-black-50"></i>
        </div>
      </div>
    );
  });

  return (
    <>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div>
            <Modal.Title>Cart</Modal.Title>
            <h6 className="font-weight-bold d-block">{cartNumber} items</h6>
          </div>
        </Modal.Header>
        <Modal.Body
          style={{
            maxHeight: "calc(100vh - 210px)",
            overflowY: "scroll",
          }}
        >
          {cartItems}
        </Modal.Body>
        <Modal.Footer>
          Subtotal: ${cartTotal <= 0 ? "0.00" : cartTotal.toFixed(2)}
        </Modal.Footer>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={cartRemoveAll}>
            Remove All
          </Button>
          <Button variant="warning" onClick={handleReservation}>
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartModal;
