//private.controller.js
// const utilHelper = require("../helpers/util.helper");
// const bcrypt = require("bcrypt");
// const Users = require("../models/User");
const privateController = {};

privateController.success = async (req, res, next) => {
  console.log("Login success")
  res.send("Login Success")
};


module.exports = privateController;