import React, { useState, useEffect } from "react";
import DiscPreview from "./DiscPreview";
import axios from "axios";
import "/Users/johnfinley/Development/code/phase-5/capstone-frontend/src/Discs.css";
import { useParams } from "react-router-dom";
import SmallHeader from "./SmallHeader";

function Discs({ discs, setDiscs, w3_open, w3_close }) {
  const [page, setPage] = useState(1);
  let { category_slug } = useParams();

  useEffect(() => {
    if (discs.length === 0) {
      console.log("hello")
      axios
        .get(`http://localhost:3001/category/${category_slug}/${page}`)
        .then((response) => {
          setDiscs(response.data);
        });
    }
  }, [discs]);

  // function onScroll() {
  //   if (
  //     window.innerHeight + Math.ceil(window.pageYOffset) >=
  //     document.body.offsetHeight
  //   ) {
  //     document.querySelector(".loader").style.display = ""
  //     setPage((page) => page + 1);
      
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  let discSelection = discs.map((disc) => {
    return <DiscPreview key={disc.id} disc={disc} />;
  });
  return (
    <div>
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
        <span style={{ display: "none" }} className="mt-5 loader"></span>
      </div>
    </div>
  );
}

export default Discs;
