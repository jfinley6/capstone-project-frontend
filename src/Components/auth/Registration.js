import React, { useState } from "react";
import axios from "axios";

function Registration({ handleSuccessfulAuth, setScreen }) {
  const [registration, setRegistration] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    registrationErrors: "",
  });

  const { username, email, password, password_confirmation } = registration;

  function handleChange(event) {
    setRegistration({
      ...registration,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    axios
      .post(
        "http://localhost:3001/registrations",
        {
          user: {
            username: username,
            email: email,
            password: password,
            password_confirmation: password_confirmation,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          handleSuccessfulAuth(response.data.user);
        }
      })
      .catch((error) => {
        console.log("registration error", error);
      });
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column w-50">
      <div className="form-group d-flex flex-column align-items-center">
        <label htmlFor="InputUsername1">Username</label>
        <input
          type="username"
          name="username"
          className="form-control"
          id="InputUsername1"
          placeholder="Enter username"
          value={username}
          onChange={handleChange}
          required
          autoComplete="off"
        />
      </div>
      <div className="form-group d-flex flex-column align-items-center">
        <label htmlFor="InputEmail1">Email address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          id="InputEmail1"
          placeholder="Enter email"
          value={email}
          onChange={handleChange}
          required
          autoComplete="off"
        />
      </div>
      <div className="form-group d-flex flex-column align-items-center">
        <label htmlFor="InputPassword1">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          id="InputPassword1"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          required
          autoComplete="off"
        />
      </div>
      <div className="form-group d-flex flex-column align-items-center">
        <label htmlFor="InputPassword1">Password Confirmation</label>
        <input
          type="password"
          name="password_confirmation"
          className="form-control"
          id="InputPassword2"
          placeholder="Password Confirmation"
          value={password_confirmation}
          onChange={handleChange}
          required
          autoComplete="off"
        />
      </div>
      <button className="btn btn-primary mt-2" type="submit">
        Sign Up
      </button>
      <div className="d-flex flex-column align-items-center mt-2">
        <div>Already Have An Account?</div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setScreen(true);
          }}
          className="link-secondary btn btn-link"
          style={{textDecoration: "none"}}
        >
          Login Here
        </button>
      </div>
    </form>
  );
}

export default Registration;
