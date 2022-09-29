import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import SmallHeader from "./SmallHeader";
import MainPageDiscPreview from "./MainPageDiscPreview";
import Footer from "./Footer";

function MainPage({ w3_open, w3_close, setDiscCategory, setDiscs, setChange, setPage, setSortType }) {
  const [mainPageDiscs, setMainPageDiscs] = useState([]);
  const history = useHistory()
  const current = new Date()
  let longMonth = current.toLocaleString("en-us", { month: "long" });
  const date = `${current.getDate()}, ${current.getFullYear()}`;

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
    return <MainPageDiscPreview key={disc.id} disc={disc} />;
  });

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
            <h1 className="w3-jumbo w3-hide-small">Buy Online</h1>
            <h1 className="w3-hide-large w3-hide-medium">Buy Online</h1>
            <h1 className="w3-xxlarge w3-hide-small">Pick-Up in Store</h1>
            <h1 className="w3-hide-large w3-hide-medium">Pick-Up in Store</h1>
            <p>
              <button onClick={() => {
                setDiscCategory("All Discs");
                setDiscs([]);
                history.push("/category/all");
                setChange((current) => !current);
                setPage(1);
                setSortType("name");
                document.querySelector("#selectSort").value = "name";
              }} className="w3-button w3-black w3-padding-large w3-large">
                SHOP NOW
              </button>
            </p>
          </div>
        </div>

        {/* <!-- Product grid --> */}
        <h1 className="mt-3"><strong>Discs of the Day</strong></h1>
        <h6><strong>{longMonth} {date}</strong></h6>
        {/* <h6 className="mt-1"><strong>Enjoy 10% off today only!</strong></h6> */}
        <div className="w3-row mt-4">{discPreviews}</div>

        {/* <!-- Footer --> */}
        <Footer />

        {/* <!-- End page content --> */}
      </div>
    </div>
  );
}

export default MainPage;
