import React, { useState } from "react";
import axios from "axios";
import Footer from "../Footer";

function Login({ handleSuccessfulAuth, setScreen }) {
  const [registration, setRegistration] = useState({
    username: "",
    email: "",
    password: "",
    loginErrors: "",
  });
  const [error, setError] = useState("");

  const { email, password } = registration;

  function handleChange(event) {
    setRegistration({
      ...registration,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    axios
      .post(
        "http://localhost:3001/sessions",
        {
          user: {
            email: email,
            password: password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.logged_in) {
          handleSuccessfulAuth(response.data.user);
          setError("");
        } else if (response.data.status === 401) {
          let updatedPassword = { password: "" };
          let updatedEmail = { email: "" };
          setRegistration((registration) => ({
            ...registration,
            ...updatedPassword,
            ...updatedEmail,
          }));
          setError("That username/password combo doesn't exist!");
        }
      })
      .catch((error) => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      id="loginForm"
      className="d-flex flex-column w-75"
    >
      <div className="form-group d-flex flex-column align-items-center">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Enter email"
          value={email}
          onChange={handleChange}
          required
          autoComplete="off"
        />
      </div>
      <div className="form-group d-flex flex-column align-items-center">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          required
          autoComplete="off"
        />
      </div>
      <button className="btn btn-primary mt-2" type="submit">
        Login
      </button>
      {error === "" ? null : (
        <div style={{ textAlign: "center" }} className="text-danger mt-2">
          {error}
        </div>
      )}
      <div className="d-flex flex-column align-items-center mt-2 mb-5">
        <div>Don't have an account?</div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setScreen(false);
          }}
          className="link-secondary btn btn-link"
          style={{textDecoration : "none"}}
        >
          Sign Up Here
        </button>
      </div>
      <Footer />
    </form>
  );
}

export default Login;
