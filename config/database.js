const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    //ensureIndex: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on("connected", () => {
    console.log("Mongoose Connected");
  });
};
