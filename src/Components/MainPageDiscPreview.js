import React from 'react'

function MainPageDiscPreview({disc}) {
  return (
    <div className="w3-col l3 s6">
      <div className="w3-container">
        <div className="w3-display-container">
          <img src={disc.picture_url} style={{ width: "100%" }} alt="discpreview" />
          <div className="w3-display-middle w3-display-hover">
            <button onClick={() => console.log(disc.id)} className="w3-button w3-black">
              More Info <i className="fa fa-shopping-cart"></i>
            </button>
          </div>
        </div>
        <p>
          {disc.name}
          <b>$19.99</b>
        </p>
      </div>
    </div>
  );
}

export default MainPageDiscPreview