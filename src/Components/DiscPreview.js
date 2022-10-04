import React from "react";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";

function DiscPreview({ disc, setCart, cart, user, addToCart, removeCartItem }) {
  const {
    picture_url,
    brand,
    name,
    speed,
    glide,
    turn,
    fade,
    category,
    price,
  } = disc;

  const history = useHistory()

  const isFound = cart.some((element) => {
    if (element.id === disc.id) {
      return true;
    }
    return false;
  });  

  return (
    <div className="container-fluid col hp">
      <div className="card h-100 shadow">
        <div className="w-100 d-flex justify-content-between">
          <div className="label-top shadow-sm mx-1 my-1">
            <button
              style={{
                textDecoration: "none",
                background: "none",
                color: "inherit",
                border: "none",
                padding: "0",
                font: "inherit",
                cursor: "pointer",
                outline: "inherit",
              }}
              onClick={(event) => console.log(event.target.innerText)}
              className="text-white"
            >
              {brand}
            </button>
          </div>
          <div className="label-top shadow-sm mx-1 my-1">
            <button
              style={{
                textDecoration: "none",
                background: "none",
                color: "inherit",
                border: "none",
                padding: "0",
                font: "inherit",
                cursor: "pointer",
                outline: "inherit",
              }}
              onClick={(event) => console.log(event.target.innerText)}
              className="text-white"
            >
              {category}
            </button>
          </div>
        </div>
        <div onClick={() => history.push(`/disc/${disc.name_slug}`, {state: disc})}>
          <img
            role="button"
            src={picture_url}
            className="card-img-top"
            alt="product.title"
          />
        </div>
        <div className="card-body">
          <div className="clearfix mb-3 d-flex justify-content-center">
            <span className="float-start badge rounded-pill bg-success">
              {price}$
            </span>
          </div>
          <h5 className="card-title">
            <div target="_blank" rel="noreferrer" className="w-100">
              <span style={{ fontFamily: "copperplate", fontSize: "1.4em" }}>
                {name}
              </span>
              <br />
              <p
                className="mt-2"
                style={{ whiteSpace: "nowrap", width: "100%" }}
              >
                Speed: <span style={{ fontWeight: "bold" }}>{speed}</span> |
                Glide: <span style={{ fontWeight: "bold" }}>{glide}</span> |
                Turn: <span style={{ fontWeight: "bold" }}>{turn}</span> | Fade:{" "}
                <span style={{ fontWeight: "bold" }}>{fade}</span>
              </p>
            </div>
          </h5>

          <div className="d-grid gap-2 my-4">
            {isFound ? (
              <button
                onClick={() => removeCartItem(disc.id)}
                className="btn btn-warning bold-btn"
              >
                Remove From Cart
              </button>
            ) : (
              <button
                onClick={() => addToCart(disc.id)}
                className="btn btn-warning bold-btn"
              >
                Add to cart
              </button>
            )}
          </div>
          {/* <div className="clearfix mb-1 d-flex justify-content-center">
            <span className="float-end">
              <i className="far fa-heart" style={{ cursor: "pointer" }}></i>
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default DiscPreview;
