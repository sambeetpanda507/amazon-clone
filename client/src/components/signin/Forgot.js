import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signin.css";
import axios from "axios";
import InfoIcon from "@material-ui/icons/Info";

function Forgot() {
  const [email, setEmail] = useState("");

  const [error, setError] = useState(null);

  const [userEmail, setUserEmail] = useState(null);

  const forgotFormHandler = (e) => {
    e.preventDefault();
    sendEmail();
  };

  const sendEmail = () => {
    axios({
      url: "http://localhost:8080/api/resetpassword",
      method: "POST",
      data: { email: email },
    })
      .then((result) => {
        setUserEmail(result.data.email);
      })
      .catch((err) => {
        if (
          err.request.status === 404 ||
          err.request.status === 422 ||
          err.request.status === 500
        ) {
          setError(err);
        }
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
          <h3 className="mb-4">Forgot password?</h3>
          <form autoComplete="off" onSubmit={forgotFormHandler}>
            <div className="form-group">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                type="email"
                size="small"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(null);
                }}
                value={email}
              />
            </div>
            {error ? (
              <small className="text-danger">
                <InfoIcon fontSize="small" />
                {error.response.data.message}
              </small>
            ) : (
              ""
            )}
            {userEmail ? (
              <small className="text-success">
                <InfoIcon fontSize="small" />
                {`check ${userEmail} to reset your password.`}
              </small>
            ) : (
              ""
            )}
            <Button className="btn btn-block signin__btn my-2" type="submit">
              Continue
            </Button>
          </form>
          <small>
            By continuing, you agree to Amazon's{" "}
            <Link to="/">Conditions of Use</Link> and{" "}
            <Link to="/">Privacy Notice.</Link>
          </small>
          <div className="text-center mt-4">
            <small className="text-secondary">New to Amazon?</small>
          </div>
          <div className="signin__signup">
            <Link to="/signup">
              <Button
                className="btn-block border border-dark"
                style={{ outline: "none" }}
              >
                Create your Amazon account
              </Button>
            </Link>
          </div>
        </div>
      </div>
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
}

export default Forgot;
