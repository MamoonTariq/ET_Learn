const productController = require("../Controller/Product.controller");
const router = require("express").Router();

router.post("/add", productController.create);

module.exports = router;
