import React, {useState, useEffect} from 'react'
import axios from 'axios';
import SmallHeader from './SmallHeader';

function MainPage({w3_open, w3_close}) {
const [mainPageDiscs, setMainPageDiscs] = useState([]);

useEffect(() => {
  axios.get("http://localhost:3001/home_page").then((response) => {
    if (response.ok) {
      setMainPageDiscs(response.data);
    }
  });
});

  return (
    <div>
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
              <a className="w3-button w3-black w3-padding-large w3-large">
                SHOP NOW
              </a>
            </p>
          </div>
        </div>

        {/* <!-- Product grid --> */}
        <div className="w3-row w3-grayscale mt-4">
          <div className="w3-col l3 s6">
            <div className="w3-container">
              <img src="/w3images/jeans1.jpg" style={{ width: "100%" }} />
              <p>
                Disc<b>$24.99</b>
              </p>
            </div>
            <div className="w3-container">
              <img src="/w3images/jeans2.jpg" style={{ width: "100%" }} />
              <p>
                Disc<b>$19.99</b>
              </p>
            </div>
          </div>

          <div className="w3-col l3 s6">
            <div className="w3-container">
              <div className="w3-display-container">
                <img src="/w3images/jeans2.jpg" style={{ width: "100%" }} />
                <span className="w3-tag w3-display-topleft">New</span>
                <div className="w3-display-middle w3-display-hover">
                  <button className="w3-button w3-black">
                    Buy now <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <p>
                Disc<b>$19.99</b>
              </p>
            </div>
            <div className="w3-container">
              <img src="/w3images/jeans3.jpg" style={{ width: "100%" }} />
              <p>
                Disc<b>$20.50</b>
              </p>
            </div>
          </div>

          <div className="w3-col l3 s6">
            <div className="w3-container">
              <img src="/w3images/jeans3.jpg" style={{ width: "100%" }} />
              <p>
                Disc<b>$20.50</b>
              </p>
            </div>
            <div className="w3-container">
              <div className="w3-display-container">
                <img src="/w3images/jeans4.jpg" style={{ width: "100%" }} />
                <span className="w3-tag w3-display-topleft">Sale</span>
                <div className="w3-display-middle w3-display-hover">
                  <button className="w3-button w3-black">
                    Buy now <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <p>
                Disc<b className="w3-text-red">$14.99</b>
              </p>
            </div>
          </div>

          <div className="w3-col l3 s6">
            <div className="w3-container">
              <img src="/w3images/jeans4.jpg" style={{ width: "100%" }} />
              <p>
                Disc<b>$14.99</b>
              </p>
            </div>
            <div className="w3-container">
              <img src="/w3images/jeans1.jpg" style={{ width: "100%" }} />
              <p>
                Disc<b>$24.99</b>
              </p>
            </div>
          </div>
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
              <form action="/action_page.php" target="_blank">
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
                <a href="#">About us</a>
              </p>
              <p>
                <a href="#">Find store</a>
              </p>
              <p>
                <a href="#">Help</a>
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
                href="https://github.com/jfinley6/capstone-project-frontend"
              >
                <i
                  role="button"
                  className="fa mr-2 fa-github w3-hover-opacity w3-large"
                ></i>
              </a>
              <a
                target="_blank"
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

export default MainPage