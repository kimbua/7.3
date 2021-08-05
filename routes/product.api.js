var express = require("express");

var router = express.Router();

/**
 * @route GET api/products/
 * @description Get all products
 * @access Public
 */
router.get("/", function (req, res, next) {
  res.send([{ productId: 0 }, { productId: 1 }, { productId: 2 }]);
});

/**
 * @route GET api/products/:id
 * @description Get a single product
 * @access Public
 */

/**
 * @route GET api/products/catgory/:id
 * @description Get products of a single category
 * @access Public
 */

/**
 * @route POST api/products
 * @description Create a new product
 * @access Admin required
 */


/**
 * @route PUT api/products/:id
 * @description Update a product information
 * @access Admin required
 */

/**
 * @route DELETE api/products/:id
 * @description Delete a product
 * @access Admin required
 */

module.exports = router;

//localhost:3000/api/products/
