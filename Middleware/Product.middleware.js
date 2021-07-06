const productModel = require("../Models/Product.model");

module.exports = {
  create: (data) => {
    return productModel.create(data);
  },
};
