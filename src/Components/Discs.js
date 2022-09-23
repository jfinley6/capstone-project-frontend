import React, { useState, useEffect } from "react";
import DiscPreview from "./DiscPreview";
import axios from "axios";
import "/Users/johnfinley/Development/code/phase-5/capstone-frontend/src/Discs.css";
import { useParams } from "react-router-dom";
import SmallHeader from "./SmallHeader";
import ReactPaginate from "react-paginate";

function Discs({ page, setPage, discs, setDiscs, w3_open, w3_close, change }) {
  const [pageCount, setPageCount] = useState(0);
  let { category_slug } = useParams();


  useEffect(() => {
    document.querySelector("#scrollTop").style.display = "none";
    if (category_slug === "all") {
      axios
      .get(`http://localhost:3001/all/${page}`)
      .then(response => {
        setDiscs(response.data.discs)
        setPageCount(Math.ceil(response.data.total / 24));
        document.querySelector("#scrollTop").style.display = "";
      })
    } else {
      axios
        .get(`http://localhost:3001/category/${category_slug}/${page}`)
        .then((response) => {
          setDiscs(response.data.discs);
          setPageCount(Math.ceil(response.data.total / 24));
          document.querySelector("#scrollTop").style.display = "";
        });
    }
    
  }, [change, page]);

  const handlePageClick = (event) => {
    if (page <= pageCount) {
      setPage(event.selected + 1);
    }
  };

  let discSelection = discs.map((disc) => {
    return <DiscPreview key={disc.id} disc={disc} />;
  });

  return (
    <div id="scrollTop">
      <SmallHeader w3_open={w3_open} />
      <div
        id="disc"
        className="container-fluid bg-trasparent mt-5 p-5"
        style={{
          position: "relative",
          marginLeft: "250px",
          width: "fit-content",
        }}
      >
        <div
          id="discContainer"
          className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-3 g-3"
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
      </div>
    </div>
  );
}

export default Discs;
