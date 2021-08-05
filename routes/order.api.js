var express = require("express");
var router = express.Router();

/**
 * @route GET api/orders
 * @description Get all Orders from Users
 * @access Admin required
 */
router.get("/", function (req, res, next) {
  //localhost:3000/api/orders/
  res.send("hello");
});

/**
 * @route PUT api/orders/:id
 * @description update all Orders from Users
 * @access Admin required
 */
router.put("/", function (req, res, next) {
  res.send("hello");
});

module.exports = router;
