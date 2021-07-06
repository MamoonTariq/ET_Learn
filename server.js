const express = require("express");
const app = express();
const DB = require("./config/database");
const routes = require("./Routes/routes");
require("dotenv").config();

DB();

app.use(express.json());
app.use("/api/product", routes);

app.listen(process.env.PORT, () => {
  console.log("server is running on port:" + process.env.PORT);
});
