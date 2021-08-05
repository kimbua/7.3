const express = require("express");
const router = express.Router();
const privateController = require("../controllers/private.controller");

/**
 * @route GET api/private
 * @description User redirected to this page after successfully logged in
 * @access Public
 */
 router.get("/", privateController.success);

module.exports = router;