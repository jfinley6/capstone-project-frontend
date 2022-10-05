import React from "react";
import SmallHeader from "./SmallHeader";
import "/Users/johnfinley/Development/code/phase-5/capstone-frontend/src/Profile.css";

function Profile({ user }) {
  return (
    <div className="d-flex justify-content-center">
      <SmallHeader />
      <div
        id="profile"
        className="container-fluid d-flex justify-content-center bg-trasparent mt-lg-0 mt-sm-5 mt-xs-5 p-xs-5 pt-sm-5"
        style={{
          position: "relative",
          marginLeft: "250px",
          width: "fit-content",
        }}
      >
        <div className="container rounded bg-white mt-5 mb-5">
          <div className="row">
            <div className="col border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img
                  className="rounded-circle mt-5"
                  style={{ width: "150px" }}
                  src={user.picture}
                />
                <span className="font-weight-bold">{user.email}</span>
                <span> </span>
              </div>
            </div>
            <div className="col w-100">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <h4>User Reservations</h4>
                </div>
                <div
                  className="col-md-12 mt-3 w-100"
                  style={{ height: "40vh", overflow: "scroll" }}
                >
                  <div className="col-md-12 mb-2">
                    <button className="btn btn-primary">Order</button>
                  </div>
                  <div className="col-md-12 mb-2">
                    <button className="btn btn-primary">Order</button>
                  </div>
                  <div className="col-md-12 mb-2">
                    <button className="btn btn-primary">Order</button>
                  </div>
                  <div className="col-md-12 mb-2">
                    <button className="btn btn-primary">Order</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
