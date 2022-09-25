import React from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CartModal({handleClose, show, cartTotal}) {
  return (
    <>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            maxHeight: "calc(100vh - 210px)",
            overflowY: "scroll",
          }}
        >
         
        </Modal.Body>
        <Modal.Footer>
            Subtotal: ${cartTotal === 0 ? "0.00" : cartTotal}
        </Modal.Footer>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartModal