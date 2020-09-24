const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const dbConnect = require("./util/db");

const userRouter = require("./router/userRouter");

require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.json());

app.use(userRouter);

app.use((error, req, res, next) => {
  // console.log(error.statusCode);
  res.status(error.statusCode).json({
    message: error.message,
  });
});

app.listen(port, () => {
  dbConnect();
  console.log(`server listening on port http://localhost:${port}`);
});
