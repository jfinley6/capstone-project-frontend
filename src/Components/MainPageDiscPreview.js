import React from 'react'
import { useNavigate } from 'react-router-dom';

function MainPageDiscPreview({disc}) {
  const navigate = useNavigate();

  return (
    <div className="w3-col l3 s6">
      <div className="w3-container">
        <div className="w3-display-container">
          <img
            src={disc.picture_url}
            style={{ width: "100%" }}
            alt="discpreview"
          />
          <div className="w3-display-middle w3-display-hover">
            <button
              onClick={() =>
                navigate(`/disc/${disc.name_slug}`, { state: disc })
              }
              className="w3-button w3-black"
            >
              More Info
            </button>
          </div>
        </div>
        <p className="mb-0">
          {disc.name} |<b> ${disc.price}</b>
        </p>
        <p className="mb-2">
          <b>{disc.brand}</b>
        </p>
      </div>
    </div>
  );
}

export default MainPageDiscPreview