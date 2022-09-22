import React from "react";

function DiscPreview({ disc }) {
  const { picture_url, brand, name, speed, glide, turn, fade, category, price } = disc;
  return (
    <div className="col hp">
      <div className="card h-100 shadow">
        <div className="w-100 d-flex justify-content-between">
          <div className="label-top shadow-sm">
            <a className="text-white" href="#">
              {brand}
            </a>
          </div>
          <div className="label-top shadow-sm">
            <a className="text-white" href="#">
              {category}
            </a>
          </div>
        </div>
        <a href="#">
          <img src={picture_url} className="card-img-top" alt="product.title" />
        </a>
        <div className="card-body">
          <div className="clearfix mb-3 d-flex justify-content-center">
            <span className="float-start badge rounded-pill bg-success">
              {price}$
            </span>
          </div>
          <h5 className="card-title">
            <a target="_blank" href="#">
              {name}
              <br />
              <br />
              {name}
            </a>
          </h5>

          <div className="d-grid gap-2 my-4">
            <a href="#" className="btn btn-warning bold-btn">
              add to cart
            </a>
          </div>
          <div className="clearfix mb-1 d-flex justify-content-center">
            <span className="float-end">
              <i className="far fa-heart" style={{ cursor: "pointer" }}></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscPreview;
