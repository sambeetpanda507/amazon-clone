import React, { useContext, useEffect, useState } from "react";
import Header from "../header/Header";
import { CartContext } from "../../CartContext";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Rating from "@material-ui/lab/Rating";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddIcon from "../../svg/plus-circle-solid.svg";
import RemoveIcon from "../../svg/minus-circle-solid.svg";
import "./cart.css";

const useStyles = makeStyles({
  cartDetails: {
    listStyle: "none",
  },
  inputStyle: {
    textAlign: "center",
  },
  cartIcon: {
    fontSize: "10rem",
  },
  iconStyle: {
    height: "10px",
  },
});

const Cart = () => {
  //totalprice
  const [totalPrice, setTotalPrice] = useState(0);

  //number of items
  const [itemNumber, setItemNumber] = useState(0);

  //style the components
  const classes = useStyles();

  //global state context
  const value = useContext(CartContext);

  //updating the total cart price

  useEffect(() => {
    let price = value.cartItems.reduce(
      (accumulator, item) => accumulator + item.price,
      0
    );
    setTotalPrice(price);
  }, [value.cartItems.length]);

  //updating the count value

  useEffect(() => {
    console.log(itemNumber);
  }, [itemNumber]);

  //remove item from the cart handlere
  const removeHandler = (e) => {
    value.removeCart(e.target.id);
    // value.updateCount(value.count - 1);
  };

  //dec the number of items in the cart

  const decrementHandler = (e) => {
    console.log("decrement handler clicked", e.target.id);
    value.decCount(e.target.id);
    setItemNumber(itemNumber - 1);
    let product = value.cartItems.filter((item) => {
      return Number(item._id) === Number(e.target.id);
    });
    let itemPrice = product[0].price;
    setTotalPrice(totalPrice - itemPrice);
  };

  //incrementing the number of items in the cart
  const incrementHandler = (e) => {
    console.log("increment handler clicked", e.target.id);
    value.incCount(e.target.id);
    setItemNumber(itemNumber + 1);

    let product = value.cartItems.filter((item) => {
      return Number(item._id) === Number(e.target.id);
    });
    let itemPrice = product[0].price;
    setTotalPrice(totalPrice + itemPrice);
  };

  //render method stats
  return (
    <div className="cart">
      <Header />
      <div className="container my-3">
        <div className="row">
          {/* checking if the cart is empty or not */}
          {value.cartItems.length <= 0 ? (
            <div className="container text-center mt-5">
              <ShoppingCartIcon
                className={`text-secondary ${classes.cartIcon}`}
              />
              <h2 className="text-secondary">Cart Empty</h2>
            </div>
          ) : (
            ""
          )}
          {/* iterating through all the cart items */}
          {value.cartItems.map((value, index, arr) => {
            return (
              <div
                key={Math.random()}
                className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 my-2"
              >
                <Card className={classes.root}>
                  <CardHeader
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={value.cardTitle}
                  />
                  <CardMedia className="d-flex align-items-center justify-content-center">
                    <img src={value.cardImg} alt={index} height="220px" />
                  </CardMedia>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      M.R.P :
                      <span
                        className="text-secondary"
                        style={{ textDecoration: "line-through" }}
                      >
                        {"₹ "}
                        {value.mrp}
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Price:
                      <span className="text-danger">
                        {"₹ "}
                        {value.price}
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      You save :{" "}
                      <span className="text-danger">{value.youSave}</span>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="div"
                      className="mt-2"
                    >
                      {/* decrement button */}
                      <img
                        src={RemoveIcon}
                        alt="remove icon"
                        height="20px"
                        onClick={decrementHandler}
                        id={value._id}
                        className="buttonStyle"
                      />
                      {/* dspan to hold the item number */}
                      <span className="p-1 border border-dark ml-1 mr-1 font-weight-bold">
                        {value.count}
                      </span>
                      {/* increment button */}
                      <img
                        className="buttonStyle"
                        src={AddIcon}
                        alt="add icon"
                        height="20px"
                        onClick={incrementHandler}
                        id={value._id}
                      />
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <button
                      className="btn btn-outline-danger"
                      onClick={removeHandler}
                      id={value._id}
                    >
                      Remove from cart
                    </button>
                    <Box
                      className="ml-auto mt-4"
                      component="fieldset"
                      mb={3}
                      borderColor="transparent"
                    >
                      <Rating
                        name="read-only"
                        defaultValue={value.star}
                        precision={0.5}
                        readOnly
                      />
                    </Box>
                  </CardActions>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      {value.cartItems.length <= 0 ? (
        ""
      ) : (
        <div className="cart__payment container border bg-white p-2">
          <div className="row">
            <div className="col-md-6 text-center">
              <h3 className="text-secondary">
                Total price: <span className="text-danger">₹ {totalPrice}</span>
              </h3>
            </div>
            <div className="col-md-6 text-center">
              <button
                className="btn btn-sm font-weight-bold"
                style={{ backgroundColor: "#febd69" }}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
