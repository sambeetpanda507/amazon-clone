import React, { useState } from "react";
import "../signin/signin.css";
import { Button, TextField } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { Link } from "react-router-dom";
import InfoIcon from "@material-ui/icons/Info";
import axios from "axios";

const SignUp = ({ history }) => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const signUpSubmitHandler = (e) => {
    e.preventDefault();
    if (name.length !== 0 && email.length !== 0 && password.length !== 0) {
      if (password.length <= 6) {
        return window.alert("password must be greater than 6 characters");
      }
      console.log("submit handler");
      sendSignUpData();
    }
  };

  const sendSignUpData = () => {
    axios({
      url: "http://localhost:8080/api/signup",
      method: "POST",
      data: { name: name, email: email, password: password },
    })
      .then((result) => {
        if (!result) {
          return console.error("there is a problem during signup.");
        }
        if (result.request.status === 201) {
          history.replace("/signin");
        }
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className="signin container-fluid">
      <div className="signin__logo text-center">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG9.png"
          alt="logo"
        />
      </div>

      <div className="d-flex align-items-center justify-content-center">
        <div className="signin__form border bg-white p-3">
          <h3 className="mb-4">Login</h3>
          <form autoComplete="off" onSubmit={signUpSubmitHandler}>
            <div className="form-group">
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                fullWidth
                type="text"
                size="small"
                name="name"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
            </div>
            <div className="form-group">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                type="email"
                size="small"
                name="email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
              {error ? (
                <small className="text-danger">
                  <InfoIcon fontSize="small" />
                  {error.response.data.message}
                </small>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <TextField
                fullWidth
                size="small"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="text"
                name="password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
              <small className="text-secondary">
                <InfoIcon fontSize="small" /> Passwords must be at least 6
                characters.
              </small>
            </div>
            <Button className="btn btn-block signin__btn" type="submit">
              Continue
            </Button>
          </form>

          <small>
            By continuing, you agree to Amazon's{" "}
            <Link to="/">Conditions of Use</Link> and{" "}
            <Link to="/">Privacy Notice.</Link>
          </small>
          <div>
            <small>
              <ArrowRightIcon className="p-0" />
              <Link to="/">
                <span>Need Help?</span>
              </Link>
            </small>
            <small>
              <ArrowRightIcon className="p-0" />
              <Link to="/signin">
                <span>Already have an account?</span>
              </Link>
            </small>
          </div>
        </div>
      </div>
      <div className="text-center my-1">
        <small className="text-secondary">New to Amazon?</small>
      </div>
      <div className="d-flex align-items-center justify-content-center mt-2"></div>
      <hr />
      <div className="text-center">
        <Link to="/">
          <small> Conditions of Use </small>
        </Link>{" "}
        &nbsp;{" "}
        <Link to="/">
          <small> Privacy Notice </small>
        </Link>
        &nbsp;{" "}
        <Link to="/">
          <small> Help </small>
        </Link>
        <p className="font-font-weight-light text-secondary">{`© 1996-${new Date().getFullYear()}, Amazon.com, Inc. or its affiliates `}</p>
      </div>
    </div>
  );
};

export default SignUp;
