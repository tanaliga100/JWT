require("dotenv").config();
require("express-async-errors");
// PACKAGES
const express = require("express");
const app = express();
// MODULE IMPORTS
const mainRouter = require("./routes/main");
// IMPORTED MIDDLWARES
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.static("./public"));
app.use(express.json());

// ROUTER
app.use("/api/v1/", mainRouter);

// MIDDLWARES INSTANCE
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
