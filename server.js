const express = require("express");
require("dotenv").config();
const app = express();
const DB = require("./config/database");

DB();

app.listen(process.env.PORT, () => {
  console.log("server is running on port:" + process.env.PORT);
});
