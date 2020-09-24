const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const nodemailer = require("nodemailer");
require("dotenv").config();
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const User = require("../model/user");
// const user = require("../model/user");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.APP_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

module.exports.getHome = (req, res, next) => {
  res.send("<h1>Hello World</h1>");
};

module.exports.postSignIn = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(422).json({
      message: "invalid email or password",
    });
  }
  const { email, password } = req.body;
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        const error = new Error("invalid email or password");
        error.statusCode = 401;
        throw error;
      }
      bcrypt
        .compare(password, user.password)
        .then((result) => {
          if (result) {
            const token = jwt.sign(
              { userId: user._id, userName: user.name },
              process.env.SECRET_KEY,
              { expiresIn: "1h" }
            );
            res.status(200).json({
              message: "successfully signup",
              userId: user._id,
              userName: user.name,
              token: token,
            });
          } else {
            const error = new Error("invalid email or password");
            error.statusCode = 401;
            throw error;
          }
        })
        .catch((err) => {
          if (!err.statusCode) {
            err.statusCode = 500;
          }
          next(err);
        });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

module.exports.postSignUp = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(422).json({
      message: error.array()[0].msg,
    });
  }

  const { name, email, password } = req.body;
  User.find({ email: email })
    .then((result) => {
      if (result.length > 0) {
        const error = new Error(
          "email id already exist. Please choose a different one"
        );
        error.statusCode = 401;
        throw error;
        // return res.status(422).json({
        //   message: "email id already exist. Please choose a different one",
        // });
      }
      bcrypt
        .hash(password, 12)
        .then((encPasword) => {
          if (!encPasword) {
            const error = new Error("unable to signup");
            error.statusCode = 500;
            throw error;
            // return res.status(500).json({
            //   message: "unable to signup",
            // });
          }
          const user = new User({
            name: name,
            email: email,
            password: encPasword,
          });
          return user.save();
        })
        .then((result) => {
          if (!result) {
            const error = new Error("unable to signup");
            error.statusCode = 500;
            throw error;
            // return res.status(500).json({
            //   message: "unable to signup",
            // });
          }
          res.status(201).json({
            message: "successfully signup",
            result: result,
          });
        })
        .catch((err) => {
          if (!err.statusCode) {
            err.statusCode = 500;
          }
          next(err);
          // res.status(500).json({
          //   message: "unable to signup",
          //   error: err,
          // });
        });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

module.exports.postResetPassword = (req, res, next) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(422).json({
      message: error.array()[0].msg,
    });
  }
  const { email } = req.body;

  crypto.randomBytes(32, (err, buff) => {
    if (err) {
      return res.status(500).json({
        message: "internal server error",
        error: err,
      });
    }
    const token = buff.toString("hex");

    User.findOne({ email: email })
      .then((user) => {
        if (!user) {
          const error = new Error("Invalid email address");
          error.statusCode = 404;
          throw error;
          // return res.status(404).json({
          //   message: "Invalid email address",
          // });
        }
        res.json(user);
        user.resetToken = token;
        user.tokenExpiration = Date.now() + 1000 * 60 * 10;
        return user.save().then((result) => {
          transporter.sendMail({
            from: "sambeetpanda507@gmail.com",
            to: email,
            subject: "password reset",
            html: `<p>you have requested for the password reset.</p>
            <p>click <a href='http://localhost:3000/reset/${token}'>here</a> to set a password.</p>`,
          });
        });
      })
      .catch((err) => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
        // res.status(500).json({
        //   message: "something went wrong",
        //   error: err,
        // });
      });
  });
};

module.exports.setNewPassword = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    console.log(error);
    return res.status(422).json({
      error: error.array()[0].msg,
    });
  }
  const { email, newPassword } = req.body;
  const { token } = req.params;
  User.findOne({
    email: email,
    resetToken: token,
    tokenExpiration: {
      $gt: Date.now(),
    },
  })
    .then((user) => {
      if (!user) {
        const error = new Error(
          "no such user found. please enter a valid email"
        );
        error.statusCode = 404;
        throw error;
      }
      bcrypt
        .hash(newPassword, 12)
        .then((hashedPassword) => {
          user.password = hashedPassword;
          user.resetToken = "";
          user.tokenExpiration = null;
          return user.save();
        })
        .then((result) => {
          console.log(result);
          res.status(201).json(result);
        })
        .catch((err) => {
          res.status(500).json({
            error: err,
          });
        });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
      // res.status(500).json({
      //   error: err,
      // });
    });
};
