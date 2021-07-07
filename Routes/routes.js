const productController = require("../Controller/Product.controller");
const userController = require("../Controller/User.controller");
const router = require("express").Router();

router.post("/product/add", productController.create);

router.post("/user/signUp", userController.create);

module.exports = router;
