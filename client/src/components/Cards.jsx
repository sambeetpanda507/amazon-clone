import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Box, Button } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { UserContext } from "../UserContext";
import { CartContext } from "../CartContext";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Cards({ cardData }) {
  const [user, setUser] = useContext(UserContext);

  const [cartData, setCartData] = useState([]);

  const value = useContext(CartContext);

  const classes = useStyles();

  const cartHandler = (e) => {
    // if (!user) {
    //   return window.location.replace("/signin");
    // }
    const cart = cardData.filter((value) => {
      return value._id === Number(e.target.id);
    });

    setCartData([...cartData, cart[0]]);
    let isExist = cartData.filter((items) => {
      return items._id === cart[0]._id;
    }).length;
    if (isExist === 0) {
      value.updateCount(value.count + 1);
      value.addCartItems(cart[0]);
    } else {
      window.alert("this item is already added to the cart");
    }
  };

  return (
    <React.Fragment>
      {cardData.map((value, index, arr) => {
        return (
          <div
            className="col-md-6 col-lg-4 col-xl-4 col-sm-12 col-12 mt-2"
            key={index}
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
                <Typography variant="body2" color="textSecondary" component="p">
                  M.R.P :
                  <span
                    className="text-secondary"
                    style={{ textDecoration: "line-through" }}
                  >
                    {"₹ "}
                    {value.mrp}
                  </span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Price:
                  <span className="text-danger">
                    {"₹ "}
                    {value.price}
                  </span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  You save :{" "}
                  <span className="text-danger">{value.youSave}</span>
                </Typography>
              </CardContent>
              <CardActions>
                <button
                  className="btn btn-outline-success"
                  onClick={cartHandler}
                  id={value._id}
                >
                  add to cart
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
    </React.Fragment>
  );
}
