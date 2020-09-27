import React, { useContext } from "react";
import "./header.css";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";

import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import logo from "../../Amazon_logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { CartContext } from "../../CartContext";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

function Header({ history }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const [user, setUser] = React.useContext(UserContext);
  const value = useContext(CartContext);

  const signoutHandler = () => {
    setUser(null);
    window.localStorage.removeItem("login");
    window.location.replace("/");
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="header__avatar">
        <Avatar
          alt={user ? user.userName : ""}
          src="/static/images/avatar/1.jpg"
        />

        <h4 className="p-2 mt-1">Hello, {user ? user.userName : "Sign In"}</h4>
      </div>

      <h6 className="text-secondary  pl-3 pt-1">SHOP BY CATAGORIES</h6>

      <List>
        {[
          "Echo & Alexa",
          "Fire TV Stick",
          "Kindle E-Reader & e-books",
          "Audible audio books",
          "Amazon Prime Videos",
          "Amazon Prime Music",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          "Mobiles, Computers",
          "TV, Appliances, Electronics",
          "Home, Kitchen, Pets",
          "Beauty, Health, Grocery",
          "Sports, Fitness Bags, Lauggage",
          "Toys, Baby Produces, Kids, Fashion",
          "Car, Motorbike, Industrials",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <h6 className="text-secondary  pl-3 pt-1">HELP & SETTINGS</h6>
      <List>
        {["Your Account", "Customer Service", "Sign In"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div className="header">
      {/* <h1>{typeof value.count + " " + value.count}</h1> */}
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <React.Fragment key={"left"}>
          <div className="header__wrapper">
            <div>
              <IconButton
                className="header__drawerBtn"
                onClick={toggleDrawer("left", true)}
              >
                <MenuIcon
                  fontSize="large"
                  className="text-white header__drawerIcon"
                />
              </IconButton>

              <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
              >
                {list("left")}
              </Drawer>
            </div>
            <img className="navbar-brand" src={logo} alt="logo" />
          </div>
        </React.Fragment>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="header__form ml-auto mr-auto m-2">
            <div className="header__form__select">
              <select className="form-control">
                <option>All Catagories</option>
                <option>Deals</option>
                <option>Alexa</option>
                <option>Amazon Devices</option>
                <option>Amazon Pantry</option>
                <option>Amazon Fresh</option>
              </select>
            </div>
            <div className="header__form__inputField">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                size="50"
              />
            </div>
            <div className="header__form__button">
              <IconButton className="header__form__button__btn">
                <SearchIcon />
              </IconButton>
            </div>
          </div>
          <div className="header__country text-center p-2">
            <img
              src="https://cdn.countryflags.com/thumbs/india/flag-400.png"
              alt="country"
            />
          </div>
          <ul className="navbar-nav ml-auto text-center font-weight-bold">
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Account
              </span>
              {user ? (
                <div
                  className="dropdown-menu p-3 text-center"
                  aria-labelledby="navbarDropdown"
                >
                  {/* <Link style={{ color: "black" }} to="/"> */}
                  <button
                    className="btn btn-block"
                    style={{ backgroundColor: "#febd69" }}
                    onClick={signoutHandler}
                  >
                    Sign out
                  </button>
                  {/* </Link> */}
                </div>
              ) : (
                <div
                  className="dropdown-menu p-3 text-center"
                  aria-labelledby="navbarDropdown"
                >
                  <Link style={{ color: "black" }} to="/signin">
                    <button
                      className="btn btn-block"
                      style={{ backgroundColor: "#febd69" }}
                    >
                      Sign In
                    </button>
                  </Link>
                  <small className="text-secondary">
                    New customer? <Link to="/signup">Start here.</Link>
                  </small>
                </div>
              )}
            </li>
            <li className="nav-item">
              <span className="nav-link">Orders</span>
            </li>
            <li className="nav-item">
              <span className="nav-link">Try Prime</span>
            </li>
            <li className="nav-item">
              <Link to="/cart">
                <span className="nav-link" tabIndex="-1" aria-disabled="true">
                  <Badge badgeContent={value.cartItems.length} color="primary">
                    <ShoppingCartIcon />
                  </Badge>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
