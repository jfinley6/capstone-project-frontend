import React, { useState, useEffect } from "react";
import axios from "axios";
import SmallHeader from "./SmallHeader";
import MainPageDiscPreview from "./MainPageDiscPreview";

function MainPage({ w3_open, w3_close }) {
  const [mainPageDiscs, setMainPageDiscs] = useState([]);

  useEffect(() => {
    document.getElementById("mainPage").style.display = "none";
    axios.get("http://localhost:3001/home_page").then((response) => {
      if (response.status === 200) {
        setMainPageDiscs(response.data);
        document.getElementById("mainPage").style.display = "";
      }
    });
  }, []);

  let discPreviews = mainPageDiscs.map((disc) => {
    return <MainPageDiscPreview key={disc.id} disc={disc} />
  })

  return (
    <div id="mainPage">
      <SmallHeader w3_open={w3_open} />
      {/* <!-- Overlay effect when opening sidebar on small screens --> */}
      <div
        className="w3-overlay w3-hide-large"
        onClick={() => w3_close()}
        style={{ cursor: "pointer" }}
        title="close side menu"
        id="myOverlay"
      ></div>
      {/* <!-- !PAGE CONTENT! --> */}
      <div className="w3-main" style={{ marginLeft: "250px" }}>
        {/* <!-- Push down content on small screens --> */}
        <div className="w3-hide-large" style={{ marginTop: "82px" }}></div>

        {/* <!-- Top header --> */}

        {/* <!-- Image header --> */}
        <div className="w3-display-container w3-container">
          <img
            src="https://lionsprideonline.com/wp-content/uploads/2016/12/disc-golf-picture.jpg"
            alt="Jeans"
            style={{ width: "100%" }}
          />
          <div
            className="w3-display-topleft w3-text-white"
            style={{ padding: "24px 48px" }}
          >
            <h1 className="w3-jumbo w3-hide-small">New arrivals</h1>
            <h1 className="w3-hide-large w3-hide-medium">New arrivals</h1>
            <h1 className="w3-hide-small">COLLECTION 2022</h1>
            <p>
              <button className="w3-button w3-black w3-padding-large w3-large">
                SHOP NOW
              </button>
            </p>
          </div>
        </div>

        {/* <!-- Product grid --> */}
        <div className="w3-row w3-grayscale mt-4">
          {discPreviews}
        </div>

        {/* <!-- Footer --> */}
        <footer
          className="w3-padding-64 w3-light-grey w3-small w3-center"
          id="footer"
        >
          <div className="w3-row-padding">
            <div className="w3-col s4">
              <h4>Contact</h4>
              <p>Questions? Go ahead.</p>
              <form action="/action_page.php" target="_blank" rel="noreferrer">
                <p>
                  <input
                    className="w3-input w3-border"
                    type="text"
                    placeholder="Name"
                    name="Name"
                    required
                  />
                </p>
                <p>
                  <input
                    className="w3-input w3-border"
                    type="text"
                    placeholder="Email"
                    name="Email"
                    required
                  />
                </p>
                <p>
                  <input
                    className="w3-input w3-border"
                    type="text"
                    placeholder="Subject"
                    name="Subject"
                    required
                  />
                </p>
                <p>
                  <input
                    className="w3-input w3-border"
                    type="text"
                    placeholder="Message"
                    name="Message"
                    required
                  />
                </p>
                <button type="submit" className="w3-button w3-block w3-black">
                  Send
                </button>
              </form>
            </div>

            <div className="w3-col s4">
              <h4>About</h4>
              <p>
                <a>About us</a>
              </p>
              <p>
                <a>Find store</a>
              </p>
              <p>
                <a>Help</a>
              </p>
            </div>

            <div className="w3-col s4 w3-justify">
              <h4>Store</h4>
              <p>
                <i className="fa fa-fw fa-map-marker"></i> Denver, CO
              </p>
              <p>
                <i className="fa fa-fw fa-phone"></i> 707-338-3266
              </p>
              <p>
                <i className="fa fa-fw fa-envelope"></i> johnfinley@gmail.com
              </p>
              <h4>We accept</h4>
              <p>
                <i className="fa fa-fw fa-cc-amex"></i> Amex
              </p>
              <p>
                <i className="fa fa-fw fa-credit-card"></i> Credit Card
              </p>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/jfinley6/capstone-project-frontend"
              >
                <i
                  role="button"
                  className="fa mr-2 fa-github w3-hover-opacity w3-large"
                ></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/john-finley-71ba22198/"
              >
                <i
                  role="button"
                  className="fa fa-linkedin w3-hover-opacity w3-large"
                ></i>
              </a>
            </div>
          </div>
        </footer>

        {/* <!-- End page content --> */}
      </div>
    </div>
  );
}

export default MainPage;
