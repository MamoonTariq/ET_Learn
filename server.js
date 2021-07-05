const express = require("express");
require("dotenv").config();
const app = express();
const DB = require("./config/database");

DB();

app.listen(process.env.PORT, () => {
  console.log("Now your server running on port 8000 " + process.env.PORT);
});
