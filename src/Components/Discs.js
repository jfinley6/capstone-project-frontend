import React, { useState, useEffect } from "react";
import DiscPreview from "./DiscPreview";
import axios from "axios";
import "/Users/johnfinley/Development/code/phase-5/capstone-frontend/src/Discs.css";
import { useParams } from "react-router-dom";
import SmallHeader from "./SmallHeader";
import ReactPaginate from "react-paginate";
import Footer from "./Footer";

function Discs({
  page,
  setPage,
  discs,
  setDiscs,
  w3_open,
  change,
  discCategory,
  sortType,
  setSortType,
  setCart,
  cart,
  user,
  addToCart,
  removeCartItem,
  loggedInStatus,
}) {
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(true);

  let { category_slug } = useParams();

  useEffect(() => {
    document.querySelector("#scrollTop").style.display = "none";
    axios
      .get(
        `https://warm-journey-57671.herokuapp.com/sort/${category_slug}/${sortType}/${page}`
      )
      .then((response) => {
        setDiscs(response.data.discs);
        setLoading(false);
        if (category_slug === "all") {
          setPageCount(Math.ceil(response.data.total / 24));
        } else {
          setPageCount(Math.floor(response.data.total / 24 + 1));
        }
        document.querySelector("#scrollTop").style.display = "";
      });
  }, [sortType, page, change]);

  const handlePageClick = (event) => {
    if (page <= pageCount) {
      setPage(event.selected + 1);
    }
  };

  let discSelection = discs.map((disc) => {
    return (
      <DiscPreview
        key={disc.id}
        disc={disc}
        setCart={setCart}
        cart={cart}
        user={user}
        addToCart={addToCart}
        removeCartItem={removeCartItem}
        loggedInStatus={loggedInStatus}
      />
    );
  });

  return (
    <div id="scrollTop">
      <SmallHeader w3_open={w3_open} />
      {loading === true ? (
        <div></div>
      ) : (
        <div
          id="disc"
          className="container-fluid bg-trasparent mt-lg-0 mt-sm-5 mt-xs-5 p-xs-5 pt-sm-5"
          style={{
            position: "relative",
            marginLeft: "250px",
            width: "fit-content",
          }}
        >
          <h1 className="text-left" style={{ fontFamily: "copperplate" }}>
            {discCategory}
          </h1>
          <div
            className="box mt-2 mb-3 d-flex flex-column align-items-start"
            style={{ fontFamily: "copperplate" }}
          >
            <label>Sort by:</label>
            <select
              className="rounded bg-warning text-dark"
              id="selectSort"
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="name">Name</option>
              <option value="speed">Speed</option>
              <option value="glide">Glide</option>
              <option value="turn">Turn</option>
              <option value="fade">Fade</option>
            </select>
          </div>
          <div
            id="discContainer"
            className="row row-cols-md-2 row-cols-xs-2 row-cols-sm-2 row-cols-lg-3 g-3"
          >
            {discSelection}
          </div>
          <div className="d-flex justify-content-center mt-3">
            {pageCount > 1 ? (
              <ReactPaginate
                breakLabel="..."
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                nextLabel="next >"
                renderOnZeroPageCount={null}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                containerClassName={"pagination"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                activeClassName={"active"}
                forcePage={page - 1}
              />
            ) : null}
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Discs;
