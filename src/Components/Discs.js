import React, { useState, useEffect } from "react";
import DiscPreview from "./DiscPreview";
import axios from "axios";
import "/Users/johnfinley/Development/code/phase-5/capstone-frontend/src/Discs.css";
import { useParams } from "react-router-dom";
import SmallHeader from "./SmallHeader";

function Discs({ discs, setDiscs, w3_open, w3_close }) {
  let { category_slug, page } = useParams();

  useEffect(() => {
    if (discs.length === 0) {
      axios
        .get(`http://localhost:3001/category/${category_slug}/${page}`)
        .then((response) => {
          setDiscs(response.data);
        });
    }
  }, [discs]);

  let discSelection = discs.map((disc) => {
    return <DiscPreview key={disc.id} disc={disc} />;
  });
  return (
    <>
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
        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-3 g-3">
          {discSelection}
        </div>
      </div>
    </>
  );
}

export default Discs;
