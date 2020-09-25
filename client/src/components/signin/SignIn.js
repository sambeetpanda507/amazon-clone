import React from "react";
import "./signin.css";
import { Button, TextField } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { Link } from "react-router-dom";
import axios from "axios";
import InfoIcon from "@material-ui/icons/Info";
import { UserContext } from "../../UserContext";

const SignIn = ({ history }) => {
  const [email, setEmail] = React.useState("");

  const [password, setPassword] = React.useState("");

  const [error, setError] = React.useState(null);

  const [user, setUser] = React.useContext(UserContext);

  const signInHandler = (e) => {
    e.preventDefault();
    if (email.length !== 0 && password.length !== 0) {
      sendSigninData();
      // setEmail("");
      // setPassword("");
    }
  };

  const sendSigninData = () => {
    axios({
      url: "http://localhost:8080/api/signin",
      method: "POST",
      data: { email: email, password: password },
    })
      .then((result) => {
        if (result.request.status === 201 || result.request.status === 200) {
          setUser({ userData: result.data, isLoggedin: true });
          localStorage.setItem(
            "login",
            JSON.stringify({
              isLoggedin: true,
              userId: result.data.userId,
              username: result.data.userName,
              token: result.data.token,
              expiryDate: Date.now() + 1000 * 60 * 60,
            })
          );
          history.push("/");
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
          <form autoComplete="off" onSubmit={signInHandler}>
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
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(null);
                }}
                value={password}
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

export default SignIn;
