var express = require("express");
var router = express.Router();

// product route
const productApi = require("./product.api");
router.use("/products", productApi); //localhost:3000/api/products

// order route
const orderApi = require("./order.api");
router.use("/orders", orderApi); //localhost:3000/api/orders

module.exports = router;
