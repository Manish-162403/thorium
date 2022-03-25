const express = require('express');
//const mongoose = require('mongoose')
const router = express.Router();

const userController = require("../controller/userController")

router.post("/createUser", userController.createUser)

router.post("/login",userController.userLogin )

module.exports = router;
