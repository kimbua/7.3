var express = require("express");
var router = express.Router();

// auth route
const authApi = require("./auth.api")
router.use("/auth", authApi)

// login route
const loginApi = require("./login.api")
router.use("/login", loginApi)

// private route

const privateApi = require("./private.api")
router.use("/private", privateApi)

// product route
const productApi = require("./product.api");
router.use("/products", productApi); //localhost:3000/api/products

// order route
const orderApi = require("./order.api");
router.use("/orders", orderApi); //localhost:3000/api/orders


// user route
const userApi = require('./user.api')
router.use("/user",userApi)


// category route
const categoryApi = require('./category.api')
router.use("/category",categoryApi)


// review route
const reviewApi = require('./review.api')
router.use("/review",reviewApi)

module.exports = router;
