const mongoose = require("mongoose");
require("dotenv").config();

module.exports = function () {
  mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
  mongoose.connection.on("connected", () => {
    console.log("Mongoose Connected");
  });
};
