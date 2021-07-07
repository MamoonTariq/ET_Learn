const productController = require("../Controller/Product.controller");
const userController = require("../Controller/User.controller");
const router = require("express").Router();

router.post("/product/add", productController.create);

// User Register
router.post("/user/signUp", userController.signUp);

// User SignIn
router.post("/user/signIn", userController.signIn);

// User Update Password
router.post("/user/updatePassword", userController.updatePassword);
module.exports = router;
