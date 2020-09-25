import React, { useContext, useState } from "react";
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
});

const Cart = () => {
  const [count, setCount] = useState(1);
  const classes = useStyles();
  const value = useContext(CartContext);

  const removeHandler = (e) => {
    value.removeCart(e.target.id);
    value.updateCount(value.count - 1);
  };

  return (
    <div className="cart">
      <Header />
      <div className="container my-3">
        <div className="row">
          {value.count <= 0 ? (
            <div className="container text-center mt-5">
              <ShoppingCartIcon
                className={`text-secondary ${classes.cartIcon}`}
              />
              <h2 className="text-secondary">Cart Empty</h2>
            </div>
          ) : (
            ""
          )}
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
                    >
                      Items:{" "}
                      <input
                        type="number"
                        min="1"
                        className={classes.inputStyle}
                        size="5"
                        defaultValue="1"
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
    </div>
  );
};

export default Cart;
