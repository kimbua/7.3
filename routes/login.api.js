const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

/**
 * @route GET api/login/google
 * @description User can login with Google
 * @access Public
 */
 router.get("/google", authController.register);

 /**
 * @route GET api/login/facebook
 * @description User can login with Facebook
 * @access Public
 */

  router.get("/facebook", authController.register);


module.exports = router;