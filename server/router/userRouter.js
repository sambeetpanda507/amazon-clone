const express = require("express");
const { body } = require("express-validator");
const User = require("../model/user");
const userController = require("../controller/userController");

const router = express.Router();

//http://locathost:8080/
router.get("/", userController.getHome);

//http://localhost:8080/api/signin
router.post(
  "/api/signin",
  [
    body("email")
      .isEmail()
      .withMessage("please enter a valid email")
      .normalizeEmail(),
    body("password")
      .isLength({ min: 6 })
      .withMessage("please enter a valid password"),
  ],
  userController.postSignIn
);

//http://localhost:8080/api/signup

router.post(
  "/api/signup",
  [
    body("email")
      .isEmail()
      .withMessage("please enter a valid email")
      .normalizeEmail()
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((user) => {
          if (user) {
            return Promise.reject(
              "email id already exist please enter another email"
            );
          }
        });
      }),
    body("name").isLength({ min: 2 }).withMessage("please enter your name"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("password must be 6 or more characters long"),
  ],
  userController.postSignUp
);

// http://localhost:8080/aip/resetpassword

router.post(
  "/api/resetpassword",
  [
    body("email")
      .isEmail()
      .withMessage("enter a valid email address")
      .normalizeEmail(),
  ],
  userController.postResetPassword
);

// http://localhost:8080/newPassword/${match.params.token}

router.patch(
  "/newPassword/:token",
  [
    body("email")
      .isEmail()
      .withMessage("please enter a valid email")
      .normalizeEmail()
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((user) => {
          if (!user) {
            return Promise.reject(
              "No such user found. Please enter a valid email address"
            );
          }
        });
      }),
    body("newPassword")
      .isLength({ min: 6 })
      .withMessage("password must be 6 or more characters long."),
  ],
  userController.setNewPassword
);

// http://localhost:8080/api/cart
router.post("/api/cart", userController.addToCart);

module.exports = router;
