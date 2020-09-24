import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import "../signin/signin.css";
import axios from "axios";

const Reset = ({ match, history }) => {
  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");

  const [error, setError] = useState(null);

  const resetFormHandler = (e) => {
    e.preventDefault();
    if (email.length !== 0 && password.length !== 0) {
      if (password.length <= 6) {
        return window.alert("password must be greater than 6 characters");
      }
      resetPassword();
    }
  };

  const resetPassword = () => {
    axios({
      url: `http://localhost:8080/newPassword/${match.params.token}`,
      method: "patch",
      data: { email: email, newPassword: password },
    })
      .then((result) => {
        // console.log(result);
        if (result.request.status === 200 || result.request.status === 201) {
          history.replace("/signin");
        }
      })
      .catch((err) => {
        console.log(err);
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
          <h3 className="mb-4">Reset Password</h3>
          <form autoComplete="off" onSubmit={resetFormHandler}>
            {error ? (
              <div className="my-4">
                <small className="text-danger">
                  {error.response.data.error}
                </small>
              </div>
            ) : (
              ""
            )}
            <div className="form-group">
              <TextField
                fullWidth
                size="small"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="Email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(null);
                }}
                value={email}
              />
            </div>
            <div className="form-group">
              <TextField
                fullWidth
                size="small"
                id="outlined-basic"
                label="New Password"
                variant="outlined"
                type="text"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(null);
                }}
                value={password}
              />
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
              <Link to="/forgot">
                <span>Forgot password?</span>
              </Link>
            </small>
          </div>
        </div>
      </div>
      <div className="text-center my-1">
        <small className="text-secondary">New to Amazon?</small>
      </div>
      <div className="d-flex align-items-center justify-content-center mt-2">
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

export default Reset;
