import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "jquery";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/signin/SignIn";
import Home from "./components/home/Home";
import SignUp from "./components/signup/SignUp";
import { UserProvider } from "./UserContext";
import Forgot from "./components/signin/Forgot";
import Reset from "./components/reset/Reset";
import Dishwashwer from "./components/products/Dishwashwer";
import WashingMachines from "./components/products/WashingMachines";
import Televisions from "./components/products/Televisions";
import Refrigerators from "./components/products/Refrigerators";

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/forgot" component={Forgot} />
            <Route path="/reset/:token" exact component={Reset} />
            <Route path="/products/dishwashers" component={Dishwashwer} />
            <Route
              path="/products/washingmachines"
              component={WashingMachines}
            />
            <Route path="/products/televisions" component={Televisions} />
            <Route path="/products/refrigerators" component={Refrigerators} />
          </Switch>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
