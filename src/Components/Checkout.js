import React, {useEffect} from "react";
import Footer from "./Footer";
import SmallHeader from "./SmallHeader";
import { useHistory } from "react-router-dom";

function Checkout({ cart, cartTotal, cartNumber }) {
    const history = useHistory()
    useEffect(() => {
        if (cart.length === 0) {
            history.push("/")
        }
    }, [cart])

  const cartNames = cart.map((item) => {
    return (
      <p key={cart.id} className="d-flex">
        <p className="w-100"  href="#">
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
          Checkout
        </h1>
        <div className="mr-0 w-75">
          <div className="container">
            <form action="/action_page.php">
              <div className="row">
                <div className="col-25">
                  <div className="container">
                    <h4 className="d-flex justify-content-between">
                      Cart
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
                <div className="col-50">
                  <h3>Payment</h3>
                  <label htmlFor="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <i className="fa fa-cc-visa" style={{ color: "navy" }}></i>
                    <i className="fa fa-cc-amex" style={{ color: "blue" }}></i>
                    <i
                      className="fa fa-cc-mastercard"
                      style={{ color: "red" }}
                    ></i>
                    <i
                      className="fa fa-cc-discover"
                      style={{ color: "orange" }}
                    ></i>
                  </div>
                  <label htmlFor="cname">Name on Card</label>
                  <input
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="John Doe"
                    required
                  />
                  <label htmlFor="ccnum">Credit card number</label>
                  <input
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                    required
                    value="4242424242424242"
                  />
                  <label htmlFor="expmonth">Exp Month</label>
                  <input
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                    required
                    value="January"
                  />
                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="expyear">Exp Year</label>
                      <input
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder="2018"
                        required
                        value="2023"
                      />
                    </div>
                    <div className="col-50">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="352"
                        required
                        value="123"
                      />
                    </div>
                    <div>
                      <input
                        type="submit"
                        value="Submit Payment"
                        className="btn btn-primary w-50 centered"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
