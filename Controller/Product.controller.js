const productMiddleware = require("../Middleware/Product.middleware");

module.exports = {
  create: (req, res) => {
    const body = req.body;
    productMiddleware.create(body).then((responce) => {
      if (responce) {
        res.json({
          success: 1,
          message: "Data Inserted Successfully",
          data: responce,
        });
      } else {
        res.json({
          success: 0,
          message: "Failed Data",
        });
      }
    });
  },
};
