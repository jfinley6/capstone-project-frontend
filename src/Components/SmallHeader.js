import React from 'react'
import { useNavigate } from 'react-router-dom';

function SmallHeader({w3_open}) {
  const navigate = useNavigate()
  return (
    <header
    id="smallHeader"
      className="w3-bar w3-top w3-hide-large w3-black"
      style={{ height: "10vh" }}
    >
      <div role="button" onClick={() => navigate("/")} className="w3-bar-item w3-padding-24 w3-wide">
        Out of Bounds Discs
      </div>
      <button
        className="w3-bar-item w3-button w3-padding-24 w3-right"
        onClick={() => w3_open()}
      >
        <i className="fa fa-bars"></i>
      </button>
    </header>
  );
}

export default SmallHeader